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

import _ from 'lodash';

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
  const [windowWidth, setWindowWidth] = useState(0);

  const [introductionOffsetTop, setIntroductionOffsetTop] = useState(0); // 1
  const [skillOffsetTop, setSkillOffsetTop] = useState(0); // 2
  const [experienceOffsetTop, setExperienceOffsetTop] = useState(0); // 3
  const [contactOffsetTop, setContactOffsetTop] = useState(0); // 4

  const [scrollGauge, setScrollGauge] = useState<number>(0);
  const [isPossibleMove, setIsPossibleMove] = useState<boolean>(true);
  const [isPossibleMiniMove, setIsPossibleMiniMove] = useState<boolean>(true);
  const [currentArea, setCurrentArea] = useState<string>(INTRO_ARTICLE_AREA);
  const [isWhiteColor, setIsWhiteColor] = useState<boolean>(true);

  // 초기 위치 설정
  useEffect(() => {
    window.scrollTo({ top: 0 });
    setCurrentArea(INTRO_ARTICLE_AREA);
  }, []);

  // 색상 설정
  useEffect(() => {
    if (
      currentArea === INTRO_ARTICLE_AREA ||
      currentArea === EXP_ARTICLE_AREA
    ) {
      setIsWhiteColor(true);
    } else if (
      currentArea === SKILL_ARTICLE_AREA ||
      currentArea === CONTACT_ARTICLE_AREA
    ) {
      setIsWhiteColor(false);
    }
  }, [currentArea]);

  // 현재 위치 파악하는 함수
  const checkCurrentY = useCallback(() => {
    const { scrollY } = window; // eslint-disable-line no-undef
    const halfHeight = (skillOffsetTop - introductionOffsetTop) / 2;
    if (scrollY >= 0 && scrollY < skillOffsetTop - halfHeight) {
      return INTRO_ARTICLE_AREA;
    }
    if (
      skillOffsetTop - halfHeight <= scrollY &&
      scrollY < experienceOffsetTop - halfHeight
    ) {
      return SKILL_ARTICLE_AREA;
    }
    if (
      experienceOffsetTop - halfHeight <= scrollY &&
      scrollY < contactOffsetTop - halfHeight
    ) {
      return EXP_ARTICLE_AREA;
    }
    if (contactOffsetTop - halfHeight <= scrollY) {
      return CONTACT_ARTICLE_AREA;
    }
    return false;
  }, [
    skillOffsetTop,
    experienceOffsetTop,
    contactOffsetTop,
    introductionOffsetTop,
  ]);

  // deltaY에 따라서 delta 값 반환 함수
  const checkDeltaPower = useCallback((deltaY: number) => {
    const delta = Math.abs(deltaY);
    if (delta > 0 && delta <= 100) {
      return 1;
    }
    if (delta > 100 && delta <= 250) {
      return 2;
    }
    if (delta < 250 && delta <= 450) {
      return 3;
    }
    if (delta < 450) {
      return 4;
    }
    return 0;
  }, []);

  // 아래로 이동 함수
  const handleDownCurrentY = useCallback(() => {
    switch (checkCurrentY()) {
      case INTRO_ARTICLE_AREA:
        window.scrollTo({ top: skillOffsetTop });
        setCurrentArea(SKILL_ARTICLE_AREA);
        break;
      case SKILL_ARTICLE_AREA:
        window.scrollTo({ top: experienceOffsetTop });
        setCurrentArea(EXP_ARTICLE_AREA);
        break;
      case EXP_ARTICLE_AREA:
        window.scrollTo({ top: contactOffsetTop });
        setCurrentArea(CONTACT_ARTICLE_AREA);
        break;
      default:
        break;
    }
  }, [skillOffsetTop, contactOffsetTop, experienceOffsetTop, checkCurrentY]);

  // 위로 이동 함수
  const handleUpCurrentY = useCallback(() => {
    switch (checkCurrentY()) {
      case INTRO_ARTICLE_AREA:
        window.scrollTo({ top: introductionOffsetTop });
        setCurrentArea(INTRO_ARTICLE_AREA);
        break;
      case SKILL_ARTICLE_AREA:
        window.scrollTo({ top: introductionOffsetTop });
        setCurrentArea(INTRO_ARTICLE_AREA);
        break;
      case EXP_ARTICLE_AREA:
        window.scrollTo({ top: skillOffsetTop });
        setCurrentArea(SKILL_ARTICLE_AREA);
        break;
      case CONTACT_ARTICLE_AREA:
        window.scrollTo({ top: experienceOffsetTop });
        setCurrentArea(EXP_ARTICLE_AREA);
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
    switch (checkCurrentY()) {
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
      if (!isPossibleMove || !isPossibleMiniMove) return false;

      // 아래로
      if (deltaY > 0) {
        if (scrollGauge < 0) {
          resetGauge();
          setIsPossibleMiniMove(false);
          setTimeout(() => {
            setIsPossibleMiniMove(true);
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
          setIsPossibleMiniMove(false);
          setTimeout(() => {
            setIsPossibleMiniMove(true);
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
      isPossibleMiniMove,
    ],
  );

  // 리사이즈 이벤트
  const handleResize = useCallback(() => {
    const { innerWidth } = window;
    setWindowWidth(innerWidth);
  }, []);

  // 휠 이벤트 감지
  useEffect(() => {
    window.addEventListener('wheel', handleWheel); // eslint-disable-line no-undef
    window.addEventListener('resize', _.throttle(handleResize, 200)); // eslint-disable-line no-undef
    return () => {
      window.removeEventListener('wheel', handleWheel); // eslint-disable-line no-undef
      window.removeEventListener('resize', _.throttle(handleResize, 200)); // eslint-disable-line no-undef
    };
  }, [handleWheel, handleResize]);

  // 소개 섹션 이동 함수
  const moveIntroArticle = useCallback(() => {
    window.scrollTo({ top: introductionOffsetTop });
    setCurrentArea(INTRO_ARTICLE_AREA);
    setScrollGauge(0);
  }, [introductionOffsetTop]);

  // 스킬 섹션 이동 함수
  const moveSkillArticle = useCallback(() => {
    window.scrollTo({ top: skillOffsetTop });
    setCurrentArea(SKILL_ARTICLE_AREA);
    setScrollGauge(0);
  }, [skillOffsetTop]);

  // 경험 섹션 이동 함수
  const moveExperienceArticle = useCallback(() => {
    window.scrollTo({ top: experienceOffsetTop });
    setCurrentArea(EXP_ARTICLE_AREA);
    setScrollGauge(0);
  }, [experienceOffsetTop]);

  // 연락처 섹션 이동 함수
  const moveContactArticle = useCallback(() => {
    window.scrollTo({ top: contactOffsetTop });
    setCurrentArea(CONTACT_ARTICLE_AREA);
    setScrollGauge(0);
  }, [contactOffsetTop]);

  const onClickSectionDownButton = useCallback(() => {
    switch (currentArea) {
      case INTRO_ARTICLE_AREA:
        moveSkillArticle();
        break;
      case SKILL_ARTICLE_AREA:
        moveExperienceArticle();
        break;
      case EXP_ARTICLE_AREA:
        moveContactArticle();
        break;
      default:
        break;
    }
  }, [
    currentArea,
    moveSkillArticle,
    moveExperienceArticle,
    moveContactArticle,
  ]);

  const onClickSectionUpButton = useCallback(() => {
    switch (currentArea) {
      case SKILL_ARTICLE_AREA:
        moveIntroArticle();
        break;
      case EXP_ARTICLE_AREA:
        moveSkillArticle();
        break;
      case CONTACT_ARTICLE_AREA:
        moveExperienceArticle();
        break;
      default:
        break;
    }
  }, [currentArea, moveSkillArticle, moveExperienceArticle, moveIntroArticle]);

  return (
    <LayoutContext.Provider
      value={{
        introductionOffsetTop,
        skillOffsetTop,
        experienceOffsetTop,
        contactOffsetTop,
        scrollGauge,
        isPossibleMove,
        isPossibleMiniMove,
        currentArea,
        isWhiteColor,
        windowWidth,
        setIntroductionOffsetTop,
        setSkillOffsetTop,
        setExperienceOffsetTop,
        setContactOffsetTop,

        // 화면 이동 함수
        moveIntroArticle,
        moveSkillArticle,
        moveExperienceArticle,
        moveContactArticle,
        onClickSectionDownButton,
        onClickSectionUpButton,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => useContext(LayoutContext);

export default LayoutProvider;
