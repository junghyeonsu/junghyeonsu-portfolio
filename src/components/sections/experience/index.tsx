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

import * as Styled from '#/components/sections/experience/styled';
import Hyperlink from '#/components/sections/experience/Hyperlink';

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
          Experience
        </Underline>
      </Styled.ExperienceTitle>
      <FadeInContent delay={2}>
        <ExperienceContainer>
          <Styled.ExperienceCard>
            <Styled.ExperienceCardTitle>
              하얀마인드 인턴
            </Styled.ExperienceCardTitle>
          </Styled.ExperienceCard>
          <Styled.ExperienceCard>
            <Styled.ExperienceCardTitle>
              하얀마인드 인턴
              <Styled.HyperlinkContainer>
                <Hyperlink href="#" text="하이" />
              </Styled.HyperlinkContainer>
            </Styled.ExperienceCardTitle>
          </Styled.ExperienceCard>
          <Styled.ExperienceCard>
            <Styled.ExperienceCardTitle>
              하얀마인드 인턴
            </Styled.ExperienceCardTitle>
          </Styled.ExperienceCard>
        </ExperienceContainer>
      </FadeInContent>
      <Styled.ExperienceTitle>
        <Underline color={UNDER_LINE_COLOR} delay={1}>
          Skill
        </Underline>
      </Styled.ExperienceTitle>
      <FadeInContent delay={2}>
        <ExperienceContainer>
          <Styled.ExperienceCard>
            <Styled.ExperienceCardTitle>
              하얀마인드 인턴
            </Styled.ExperienceCardTitle>
          </Styled.ExperienceCard>
          <Styled.ExperienceCard>
            <Styled.ExperienceCardTitle>
              하얀마인드 인턴
              <Styled.HyperlinkContainer>
                <Hyperlink href="#" text="하이" />
              </Styled.HyperlinkContainer>
            </Styled.ExperienceCardTitle>
          </Styled.ExperienceCard>
          <Styled.ExperienceCard>
            <Styled.ExperienceCardTitle>
              하얀마인드 인턴
            </Styled.ExperienceCardTitle>
          </Styled.ExperienceCard>
        </ExperienceContainer>
      </FadeInContent>
    </Container>
  );
};

export default Experience;
