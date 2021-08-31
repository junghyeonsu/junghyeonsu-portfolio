import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
import { useExperienceContext } from '#/contexts/ExperienceContext';

import { UNDER_LINE_DELAY } from '#/constants';

import { BLACK_BACKGROUND_COLOR, WHITE_TEXT_COLOR } from '#/colors';

import {
  FadeOutHeaderText,
  FadeInContent,
  Underline,
} from '#/components/common/gsap';

import ExperienceCardList from '#/components/sections/experience/ExperienceCardList';
import ExperienceProgress from '#/components/sections/experience/ExperienceProgress';
import ExperienceYearSelect from '#/components/sections/experience/ExperienceYearSelect';
import ExperienceChangeButton from '#/components/sections/experience/ExperienceChangeButton';
import ExperienceTitle from '#/components/sections/experience/ExperienceTitle';
import SectionDownButton from '#/components/common/SectionDownButton';
import SectionUpButton from '#/components/common/SectionUpButton';

const Container = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${BLACK_BACKGROUND_COLOR};
  color: ${WHITE_TEXT_COLOR};
`;

const Experience = () => {
  const { setExperienceOffsetTop, windowWidth }: any = useLayoutContext(); // eslint-disable-line
  const { lineColor }: any = useExperienceContext(); // eslint-disable-line
  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const containerOffsetTop = containerRef.current.offsetTop;
    setExperienceOffsetTop(containerOffsetTop);
  }, [setExperienceOffsetTop, windowWidth]);

  return (
    <Container ref={containerRef}>
      <FadeOutHeaderText delay={1}>Experience</FadeOutHeaderText>
      <FadeInContent delay={2.5}>
        <ExperienceTitle>
          <Underline color={lineColor} delay={UNDER_LINE_DELAY}>
            Experience
          </Underline>
        </ExperienceTitle>
        <ExperienceCardList />
        <ExperienceProgress />
        <ExperienceYearSelect />
        <ExperienceChangeButton />
        <SectionDownButton />
        <SectionUpButton />
      </FadeInContent>
    </Container>
  );
};

export default Experience;
