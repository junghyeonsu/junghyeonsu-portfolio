import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
import { BLACK_BACKGROUND_COLOR, WHITE_TEXT_COLOR } from '#/colors';

import {
  FadeOutHeaderText,
  FadeInLeftTopText,
  FadeInContent,
  Underline,
} from '#/components/common/gsap';

import ExperienceCardList from '#/components/sections/experience/ExperienceCardList';
import ExperienceProgress from '#/components/sections/experience/ExperienceProgress';
import ExperienceYearSelect from '#/components/sections/experience/ExperienceYearSelect';
import ExperienceChangeButton from '#/components/sections/experience/ExperienceChangeButton';

const Container = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${BLACK_BACKGROUND_COLOR};
  color: ${WHITE_TEXT_COLOR};
`;

const Experience = () => {
  const { setExperienceOffsetTop }: any = useLayoutContext(); // eslint-disable-line 
  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const containerOffsetTop = containerRef.current.offsetTop;
    console.log('setExperienceOffsetTop:', containerOffsetTop); // eslint-disable-line
    setExperienceOffsetTop(containerOffsetTop);
  }, [setExperienceOffsetTop]);

  return (
    <Container ref={containerRef}>
      <FadeOutHeaderText delay={1}>Experience</FadeOutHeaderText>
      <FadeInLeftTopText delay={3}>
        <Underline delay={3.5}>Experience</Underline>
      </FadeInLeftTopText>

      <FadeInContent delay={2.5}>
        <ExperienceCardList />

        <ExperienceProgress />

        <ExperienceYearSelect />

        <ExperienceChangeButton />
      </FadeInContent>
    </Container>
  );
};

export default Experience;
