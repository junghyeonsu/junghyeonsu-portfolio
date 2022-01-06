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
  EXP_ARTICLE_AREA,
  INTRO_ARTICLE_AREA,
  SKILL_ARTICLE_AREA,
  CONTACT_ARTICLE_AREA,
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

  const [isWhiteColor, setIsWhiteColor] = useState<boolean>(true);

  const [currentArea, setCurrentArea] = useState<string>(INTRO_ARTICLE_AREA);

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

  // 리사이즈 이벤트
  const handleResize = useCallback(() => {
    const { innerWidth } = window;
    setWindowWidth(innerWidth);
  }, []);

  const handleScroll = useCallback(() => {
    const { scrollY } = window;
    console.log(scrollY);
    console.log(
      introductionOffsetTop,
      skillOffsetTop,
      experienceOffsetTop,
      contactOffsetTop,
    );
  }, [
    contactOffsetTop,
    experienceOffsetTop,
    introductionOffsetTop,
    skillOffsetTop,
  ]);

  // 휠 이벤트 감지
  useEffect(() => {
    window.addEventListener('resize', _.throttle(handleResize, 200)); // eslint-disable-line no-undef
    window.addEventListener('scroll', _.throttle(handleScroll, 50)); // eslint-disable-line no-undef
    return () => {
      window.removeEventListener('resize', _.throttle(handleResize, 200)); // eslint-disable-line no-undef
    };
  }, [handleResize, handleScroll]);

  // 소개 섹션 이동 함수
  const moveIntroArticle = useCallback(() => {
    window.scrollTo({ top: introductionOffsetTop });
    setCurrentArea(INTRO_ARTICLE_AREA);
  }, [introductionOffsetTop]);

  // 스킬 섹션 이동 함수
  const moveSkillArticle = useCallback(() => {
    window.scrollTo({ top: skillOffsetTop });
    setCurrentArea(SKILL_ARTICLE_AREA);
  }, [skillOffsetTop]);

  // 경험 섹션 이동 함수
  const moveExperienceArticle = useCallback(() => {
    window.scrollTo({ top: experienceOffsetTop });
    setCurrentArea(EXP_ARTICLE_AREA);
  }, [experienceOffsetTop]);

  // 연락처 섹션 이동 함수
  const moveContactArticle = useCallback(() => {
    window.scrollTo({ top: contactOffsetTop });
    setCurrentArea(CONTACT_ARTICLE_AREA);
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
