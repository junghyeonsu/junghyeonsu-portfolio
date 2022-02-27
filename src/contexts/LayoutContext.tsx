import React, { useContext, useCallback, useEffect, createContext, useState, ReactChild, ReactChildren, ReactElement } from 'react';

import _ from 'lodash';

import { EXP_ARTICLE_AREA, INTRO_ARTICLE_AREA } from '#/constants';

const LayoutContext = createContext<Record<string, unknown>>({});

const LayoutProvider = ({ children }: { children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[] }): ReactElement => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentScrollTop, setCurrentScrollTop] = useState(0);
  const [introductionOffsetTop, setIntroductionOffsetTop] = useState(0); // 1
  const [experienceOffsetTop, setExperienceOffsetTop] = useState(0); // 2
  const [currentArea, setCurrentArea] = useState<string>(INTRO_ARTICLE_AREA);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setWindowWidth(window.innerWidth);
  }, []);

  const handleResize = useCallback(() => {
    const { innerWidth } = window;
    setWindowWidth(innerWidth);
  }, []);

  const handleScroll = useCallback(() => {
    const { scrollTop } = document.documentElement;
    setCurrentScrollTop(scrollTop);
  }, []);

  // 휠 이벤트 감지
  useEffect(() => {
    window.addEventListener('resize', _.throttle(handleResize, 200)); // eslint-disable-line no-undef
    return () => {
      window.removeEventListener('resize', _.throttle(handleResize, 200)); // eslint-disable-line no-undef
    };
  }, [handleResize]);

  // 스크롤 이벤트 감지
  useEffect(() => {
    window.addEventListener('scroll', _.throttle(handleScroll, 200)); // eslint-disable-line no-undef
    return () => {
      window.removeEventListener('scroll', _.throttle(handleScroll, 200)); // eslint-disable-line no-undef
    };
  }, [handleScroll]);

  // 소개 섹션 이동 함수
  const moveIntroArticle = useCallback(() => {
    window.scrollTo({ top: introductionOffsetTop });
    setCurrentArea(INTRO_ARTICLE_AREA);
  }, [introductionOffsetTop]);

  // 경험 섹션 이동 함수
  const moveExperienceArticle = useCallback(() => {
    window.scrollTo({ top: experienceOffsetTop });
    setCurrentArea(EXP_ARTICLE_AREA);
  }, [experienceOffsetTop]);

  return (
    <LayoutContext.Provider
      value={{
        introductionOffsetTop,
        experienceOffsetTop,
        currentScrollTop,
        currentArea,
        windowWidth,
        setIntroductionOffsetTop,
        setExperienceOffsetTop,
        moveIntroArticle,
        moveExperienceArticle,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => useContext(LayoutContext);

export default LayoutProvider;
