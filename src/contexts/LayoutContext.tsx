import React, {
  useContext,
  useCallback,
  useEffect,
  createContext,
  useState,
  ReactChild,
  ReactChildren,
  ReactElement,
} from 'react';

import {
  SCROLL_ACTIVE_VALUE,
  EXP_ARTICLE_AREA,
  INTRO_ARTICLE_AREA,
  SKILL_ARTICLE_AREA,
  CONTACT_ARTICLE_AREA,
  WHEEL_CONTROL_TIME,
  WHEEL_MINI_CONTROL_TIME,
} from '#/constants';

const LayoutContext = createContext<Record<string, unknown>>({});

const LayoutProvider = ({
  children,
}: {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
}): ReactElement => {
  const [introductionOffsetTop, setIntroductionOffsetTop] = useState(0); // 1
  const [skillOffsetTop, setSkillOffsetTop] = useState(0); // 2
  const [experienceOffsetTop, setExperienceOffsetTop] = useState(0); // 3
  const [contactOffsetTop, setContactOffsetTop] = useState(0); // 4

  const [scrollGauge, setScrollGauge] = useState<number>(0);
  const [isPossibleMove, setIsPossibleMove] = useState<boolean>(true);

  // 현재 위치 파악하는 함수
  const checkCurrentY = useCallback(
    (currentScrollY: number) => {
      const halfHeight = (skillOffsetTop - introductionOffsetTop) / 2;
      if (currentScrollY >= 0 && currentScrollY < skillOffsetTop - halfHeight) {
        return INTRO_ARTICLE_AREA;
      }
      if (
        skillOffsetTop - halfHeight <= currentScrollY &&
        currentScrollY < experienceOffsetTop - halfHeight
      ) {
        return SKILL_ARTICLE_AREA;
      }
      if (
        experienceOffsetTop - halfHeight <= currentScrollY &&
        currentScrollY < contactOffsetTop - halfHeight
      ) {
        return EXP_ARTICLE_AREA;
      }
      if (contactOffsetTop - halfHeight <= currentScrollY) {
        return CONTACT_ARTICLE_AREA;
      }
      return false;
    },
    [
      skillOffsetTop,
      experienceOffsetTop,
      contactOffsetTop,
      introductionOffsetTop,
    ],
  );

  // deltaY에 따라서 delta 값 반환 함수
  const checkDeltaPower = useCallback((deltaY: number) => {
    switch (Math.abs(deltaY)) {
      case 150:
        return 1;
      case 300:
        return 2;
      case 450:
        return 3;
      case 600:
        return 4;
      default:
        return 0;
    }
  }, []);

  // 아래로 이동 함수
  const handleDownCurrentY = useCallback(() => {
    const { scrollY } = window; // eslint-disable-line no-undef
    switch (checkCurrentY(scrollY)) {
      case INTRO_ARTICLE_AREA:
        window.scrollTo({ top: skillOffsetTop });
        break;
      case SKILL_ARTICLE_AREA:
        window.scrollTo({ top: experienceOffsetTop });
        break;
      case EXP_ARTICLE_AREA:
        window.scrollTo({ top: contactOffsetTop });
        break;
      default:
        break;
    }
  }, [skillOffsetTop, contactOffsetTop, experienceOffsetTop, checkCurrentY]);

  // 위로 이동 함수
  const handleUpCurrentY = useCallback(() => {
    const { scrollY } = window; // eslint-disable-line no-undef
    switch (checkCurrentY(scrollY)) {
      case INTRO_ARTICLE_AREA:
        window.scrollTo({ top: introductionOffsetTop });
        break;
      case SKILL_ARTICLE_AREA:
        window.scrollTo({ top: introductionOffsetTop });
        break;
      case EXP_ARTICLE_AREA:
        window.scrollTo({ top: skillOffsetTop });
        break;
      case CONTACT_ARTICLE_AREA:
        window.scrollTo({ top: experienceOffsetTop });
        break;
      default:
        break;
    }
  }, [
    skillOffsetTop,
    experienceOffsetTop,
    introductionOffsetTop,
    checkCurrentY,
  ]);

  // 조금씩 아래로
  const handleMiniDownCurrentY = useCallback(
    (deltaY: number) => {
      const { scrollY } = window; // eslint-disable-line no-undef
      const deltaPower = checkDeltaPower(deltaY);
      if (scrollGauge < 0) {
        return;
      }
      window.scrollTo({ top: scrollY + deltaPower });
    },
    [scrollGauge, checkDeltaPower],
  );

  // 조금씩 위로
  const handleMiniUpCurrentY = useCallback(
    (deltaY: number) => {
      const { scrollY } = window; // eslint-disable-line no-undef
      const deltaPower = checkDeltaPower(deltaY);
      if (scrollGauge > 0) {
        return;
      }
      window.scrollTo({ top: scrollY - deltaPower });
    },
    [scrollGauge, checkDeltaPower],
  );

  // 반대 방향 delta 값 들어올 시 0으로 초기화 하는 함수
  const resetGauge = useCallback(() => {
    const { scrollY } = window; // eslint-disable-line no-undef
    switch (checkCurrentY(scrollY)) {
      case INTRO_ARTICLE_AREA:
        setScrollGauge(0);
        window.scrollTo({ top: introductionOffsetTop });
        break;
      case SKILL_ARTICLE_AREA:
        setScrollGauge(0);
        window.scrollTo({ top: skillOffsetTop });
        break;
      case EXP_ARTICLE_AREA:
        setScrollGauge(0);
        window.scrollTo({ top: experienceOffsetTop });
        break;
      case CONTACT_ARTICLE_AREA:
        setScrollGauge(0);
        window.scrollTo({ top: contactOffsetTop });
        break;
      default:
        break;
    }
  }, [
    contactOffsetTop,
    introductionOffsetTop,
    skillOffsetTop,
    experienceOffsetTop,
    checkCurrentY,
  ]);

  // 휠 이벤트
  const handleWheel = useCallback(
    event => {
      const { deltaY } = event; // eslint-disable-line no-undef
      if (!isPossibleMove) return false;

      // 아래로
      if (deltaY > 0) {
        if (scrollGauge < 0) {
          resetGauge();
          setIsPossibleMove(false);
          setTimeout(() => {
            setIsPossibleMove(true);
          }, WHEEL_MINI_CONTROL_TIME);
        } else {
          setScrollGauge(scrollGauge + checkDeltaPower(deltaY));
          handleMiniDownCurrentY(deltaY);
        }
      }
      // 위로
      else if (deltaY < 0) {
        if (scrollGauge > 0) {
          resetGauge();
          setIsPossibleMove(false);
          setTimeout(() => {
            setIsPossibleMove(true);
          }, WHEEL_MINI_CONTROL_TIME);
        } else {
          setScrollGauge(scrollGauge - checkDeltaPower(deltaY));
          handleMiniUpCurrentY(deltaY);
        }
      }

      // 40 도달
      if (scrollGauge >= SCROLL_ACTIVE_VALUE) {
        setIsPossibleMove(false);
        setTimeout(() => {
          setIsPossibleMove(true);
        }, WHEEL_CONTROL_TIME);
        setScrollGauge(0);
        handleDownCurrentY();
      }
      // -40 도달
      else if (scrollGauge <= -SCROLL_ACTIVE_VALUE) {
        setIsPossibleMove(false);
        setTimeout(() => {
          setIsPossibleMove(true);
        }, WHEEL_CONTROL_TIME);
        setScrollGauge(0);
        handleUpCurrentY();
      }

      return false;
    },
    [
      setScrollGauge,
      scrollGauge,
      handleDownCurrentY,
      handleUpCurrentY,
      handleMiniUpCurrentY,
      handleMiniDownCurrentY,
      checkDeltaPower,
      resetGauge,
      isPossibleMove,
    ],
  );

  // 휠 이벤트 감지
  useEffect(() => {
    window.addEventListener('wheel', handleWheel); // eslint-disable-line no-undef
    return () => {
      window.removeEventListener('wheel', handleWheel); // eslint-disable-line no-undef
    };
  }, [handleWheel]);

  return (
    <LayoutContext.Provider
      value={{
        introductionOffsetTop,
        skillOffsetTop,
        experienceOffsetTop,
        contactOffsetTop,
        scrollGauge,
        isPossibleMove,
        setIntroductionOffsetTop,
        setSkillOffsetTop,
        setExperienceOffsetTop,
        setContactOffsetTop,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => useContext(LayoutContext);

export default LayoutProvider;
