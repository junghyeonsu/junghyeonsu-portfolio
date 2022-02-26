import React, { useRef, useEffect } from 'react';

import { useLayoutContext } from '#/contexts/LayoutContext';
import { FadeInContent } from '#/components/gsap';
import YellowPoint from '#/components/YellowPoint';
import * as Styled from '#/components/experience/styled';
import { Hayanmind, SatrecI } from './contents';

const Experience = () => {
  const { setSkillOffsetTop, windowWidth }: any = useLayoutContext(); // eslint-disable-line
  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const containerOffsetTop = containerRef.current.offsetTop;
    setSkillOffsetTop(containerOffsetTop);
  }, [setSkillOffsetTop, windowWidth]);

  return (
    <Styled.Container ref={containerRef}>
      <FadeInContent delay={0.5}>
        <Styled.ExperienceContainer>
          <Styled.ExperienceTitle>
            Work<YellowPoint>.</YellowPoint>
          </Styled.ExperienceTitle>

          <Hayanmind />
          <SatrecI />
        </Styled.ExperienceContainer>
      </FadeInContent>

      <FadeInContent delay={0.5}>
        <Styled.ExperienceContainer>
          <Styled.ExperienceTitle>
            Project<YellowPoint>.</YellowPoint>
          </Styled.ExperienceTitle>
          <Hayanmind />
        </Styled.ExperienceContainer>
      </FadeInContent>

      <FadeInContent delay={0.5}>
        <Styled.ExperienceContainer>
          <Styled.ExperienceTitle>
            Open Source<YellowPoint>.</YellowPoint>
          </Styled.ExperienceTitle>
          <Hayanmind />
        </Styled.ExperienceContainer>
      </FadeInContent>

      <FadeInContent delay={0.5}>
        <Styled.ExperienceContainer>
          <Styled.ExperienceTitle>
            Skill<YellowPoint>.</YellowPoint>
          </Styled.ExperienceTitle>
          <Hayanmind />
        </Styled.ExperienceContainer>
      </FadeInContent>
    </Styled.Container>
  );
};

export default Experience;
