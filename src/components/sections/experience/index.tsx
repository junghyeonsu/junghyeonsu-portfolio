import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
import {
  WHITE_BACKGROUND_COLOR,
  BLACK_TEXT_COLOR,
  UNDER_LINE_COLOR,
} from '#/colors';

import {
  FadeInContent,
  Underline,
} from '#/components/common/gsap';

import Content from '#/components/sections/experience/content';
import * as Styled from '#/components/sections/experience/styled';
// import Hyperlink from '#/components/sections/experience/Hyperlink';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: ${WHITE_BACKGROUND_COLOR};
  color: ${BLACK_TEXT_COLOR};
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 200px;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const Experience = () => {
  const { setSkillOffsetTop, windowWidth }: any = useLayoutContext(); // eslint-disable-line
  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const containerOffsetTop = containerRef.current.offsetTop;
    setSkillOffsetTop(containerOffsetTop);
  }, [setSkillOffsetTop, windowWidth]);

  return (
    <Container ref={containerRef}>
      <Styled.ExperienceTitle>
        <Underline color={UNDER_LINE_COLOR} delay={1}>
          Work
        </Underline>
      </Styled.ExperienceTitle>

      <FadeInContent delay={2}>
        <ExperienceContainer>
          {Content.work.map(work => {
            return (
              <Styled.ExperienceCard>
                <Styled.ExperienceCardTopContainer>
                  <Styled.ExperienceCardTitleType>
                    {work.type}
                  </Styled.ExperienceCardTitleType>
                  <Styled.ExperienceCardTitle>
                    {work.title}
                  </Styled.ExperienceCardTitle>
                  <Styled.ExperienceCardPeriod>
                    {work.period}
                  </Styled.ExperienceCardPeriod>
                </Styled.ExperienceCardTopContainer>
              </Styled.ExperienceCard>
            );
          })}
        </ExperienceContainer>
      </FadeInContent>

      <Styled.ExperienceTitle>
        <Underline color={UNDER_LINE_COLOR} delay={1}>
          Project
        </Underline>
      </Styled.ExperienceTitle>

      <FadeInContent delay={2}>
        <ExperienceContainer>
          {Content.project.map(project => {
            return (
              <Styled.ExperienceCard>
                <Styled.ExperienceCardTitle>
                  {project.title}
                </Styled.ExperienceCardTitle>
              </Styled.ExperienceCard>
            )
          })}
        </ExperienceContainer>
      </FadeInContent>

      <Styled.ExperienceTitle>
        <Underline color={UNDER_LINE_COLOR} delay={1}>
          Skill
        </Underline>
      </Styled.ExperienceTitle>
      
    </Container>
  );
};

export default Experience;
