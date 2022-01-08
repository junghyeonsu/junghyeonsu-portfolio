import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';

import { UNDER_LINE_DELAY } from '#/constants';

import { BLACK_BACKGROUND_COLOR, WHITE_TEXT_COLOR, UNDER_LINE_COLOR } from '#/colors';

import { FadeOutHeaderText, FadeInContent, Underline } from '#/components/common/gsap';

import ExperienceTitle from '#/components/sections/experience/ExperienceTitle';
import ExperienceCard from '#/components/sections/experience/ExperienceCard';
import ExperienceCardTitle from '#/components/sections/experience/ExperienceCardTitle';
import YellowPoint from '#/components/common/YellowPoint';

const Container = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 150vh; */
  width: 100vw;
  background-color: ${BLACK_BACKGROUND_COLOR};
  color: ${WHITE_TEXT_COLOR};
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 200px;
  align-items: center;
  margin-top: 400px;
  margin-bottom: 250px;
`;

const Experience = () => {
  const { setExperienceOffsetTop, windowWidth }: any = useLayoutContext(); // eslint-disable-line
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
          <Underline color={UNDER_LINE_COLOR} delay={3.5}>
            Experience
          </Underline>
        </ExperienceTitle>

        <ExperienceContainer>
          {/* Content 1 */}
          <FadeInContent delay={3}>
            <ExperienceCard>
              <ExperienceCardTitle>
                하얀마인드 인턴<YellowPoint>.</YellowPoint>
              </ExperienceCardTitle>
            </ExperienceCard>
          </FadeInContent>

          {/* Content 2 */}
          <FadeInContent delay={3.5}>
            <ExperienceCard>
              <ExperienceCardTitle>
                세트렉아이 인턴<YellowPoint>.</YellowPoint>
              </ExperienceCardTitle>
            </ExperienceCard>
          </FadeInContent>
        </ExperienceContainer>
      </FadeInContent>
    </Container>
  );
};

export default Experience;
