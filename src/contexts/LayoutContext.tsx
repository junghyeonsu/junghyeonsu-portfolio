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

import { SCROLL_ACTIVE_VALUE } from '#/constants';

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

  // 아래로 이동 함수
  const handleDownCurrentY = useCallback(() => {
    const { scrollY } = window; // eslint-disable-line no-undef
    console.log(scrollY, '아래로 이동');
    // 1에 있을 때
    if (scrollY <= skillOffsetTop) {
      window.scrollTo({ top: skillOffsetTop });
    }
    // 2에 있을 때
    else if (scrollY >= skillOffsetTop && scrollY < experienceOffsetTop) {
      window.scrollTo({ top: experienceOffsetTop });
    }
    // 3에 있을 때
    else if (scrollY >= experienceOffsetTop && scrollY < contactOffsetTop) {
      window.scrollTo({ top: contactOffsetTop });
    }
  }, [skillOffsetTop, contactOffsetTop, experienceOffsetTop]);

  // 위로 이동 함수
  const handleUpCurrentY = useCallback(() => {
    const { scrollY } = window; // eslint-disable-line no-undef
    console.log(scrollY, '위로 이동');
    // 1에 있을 때
    if (scrollY >= 0 && scrollY < skillOffsetTop) {
      window.scrollTo({ top: introductionOffsetTop });
    }
    // 2에 있을 때
    else if (scrollY >= skillOffsetTop && scrollY < experienceOffsetTop) {
      window.scrollTo({ top: introductionOffsetTop });
    }
    // 3에 있을 때
    else if (scrollY >= experienceOffsetTop && scrollY < contactOffsetTop) {
      window.scrollTo({ top: skillOffsetTop });
    }
    // 4에 있을 때
    else if (scrollY >= contactOffsetTop) {
      window.scrollTo({ top: experienceOffsetTop });
    }
  }, [
    skillOffsetTop,
    experienceOffsetTop,
    contactOffsetTop,
    introductionOffsetTop,
  ]);

  // 조금씩 아래로
  const handleMiniDownCurrentY = useCallback(() => {
    const { scrollY } = window; // eslint-disable-line no-undef
    if (scrollGauge < 0) {
      return;
    }
    if (
      (scrollY >= 0 && scrollY < SCROLL_ACTIVE_VALUE) ||
      (scrollY >= skillOffsetTop &&
        scrollY < skillOffsetTop + SCROLL_ACTIVE_VALUE) ||
      (scrollY >= experienceOffsetTop &&
        scrollY < experienceOffsetTop + SCROLL_ACTIVE_VALUE)
    ) {
      window.scrollTo({ top: scrollY + 3 });
      console.log(scrollY);
    }
  }, [skillOffsetTop, experienceOffsetTop, scrollGauge]);

  // 조금씩 위로
  // const handleMiniUpCurrentY = useCallback(() => {}, []);

  // 휠 이벤트
  const handleWheel = useCallback(
    event => {
      const { deltaY } = event; // eslint-disable-line no-undef
      const { scrollY } = window; // eslint-disable-line no-undef
      // 아래로
      if (deltaY > 0) {
        setScrollGauge(scrollGauge + 1);
        handleMiniDownCurrentY();
      }
      // 위로
      else if (deltaY < 0) {
        setScrollGauge(scrollGauge - 1);
      }

      // 40 도달
      if (scrollGauge >= SCROLL_ACTIVE_VALUE) {
        handleDownCurrentY();
        setScrollGauge(0);
      }
      // -40 도달
      else if (scrollGauge <= -SCROLL_ACTIVE_VALUE) {
        handleUpCurrentY();
        setScrollGauge(0);
      }
    },
    [
      setScrollGauge,
      scrollGauge,
      handleDownCurrentY,
      handleUpCurrentY,
      handleMiniDownCurrentY,
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
