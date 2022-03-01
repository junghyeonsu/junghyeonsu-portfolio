import React, { useRef, useEffect } from 'react';
import ExperienceTitle from './common/ExperienceTitle';
import { useLayoutContext } from '#/contexts/LayoutContext';
import { FadeInContent } from '#/components/gsap';
import * as Styled from './styled';
import {
  Univercity,
  Hayanmind,
  SatrecI,
  ReactSeasonComponent,
  FindDifferentColor,
  Portfolio,
  Tistory,
  Velog,
  YouTube,
  Kubernetes,
  ReactContribute,
  GoogleWebFundamentals,
  Vite,
} from './contents';

const CONTENT_DELAY_TIME = 0.8;

const Experience = () => {
  const { setExperienceOffsetTop, windowWidth }: any = useLayoutContext(); // eslint-disable-line
  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const containerOffsetTop = containerRef.current.offsetTop;
    setExperienceOffsetTop(containerOffsetTop);
  }, [setExperienceOffsetTop, windowWidth]);

  return (
    <Styled.Container ref={containerRef}>
      <Styled.ExperienceContainer>
        <FadeInContent delay={CONTENT_DELAY_TIME}>
          <ExperienceTitle title="Education" />
        </FadeInContent>
        <FadeInContent delay={CONTENT_DELAY_TIME}>
          <Univercity />
        </FadeInContent>
      </Styled.ExperienceContainer>

      <Styled.ExperienceContainer>
        <FadeInContent delay={CONTENT_DELAY_TIME}>
          <ExperienceTitle title="Work" />
        </FadeInContent>
        <FadeInContent delay={CONTENT_DELAY_TIME}>
          <Hayanmind />
        </FadeInContent>
        <FadeInContent delay={CONTENT_DELAY_TIME}>
          <SatrecI />
        </FadeInContent>
      </Styled.ExperienceContainer>

      <Styled.ExperienceContainer>
        <FadeInContent delay={CONTENT_DELAY_TIME}>
          <ExperienceTitle title="Project" />
        </FadeInContent>
        <FadeInContent delay={CONTENT_DELAY_TIME}>
          <ReactSeasonComponent />
        </FadeInContent>
        <FadeInContent delay={CONTENT_DELAY_TIME}>
          <FindDifferentColor />
        </FadeInContent>
        <FadeInContent delay={CONTENT_DELAY_TIME}>
          <Portfolio />
        </FadeInContent>
      </Styled.ExperienceContainer>

      <Styled.ExperienceContainer>
        <FadeInContent delay={CONTENT_DELAY_TIME}>
          <ExperienceTitle title="Share" />
        </FadeInContent>
        <FadeInContent delay={CONTENT_DELAY_TIME}>
          <Tistory />
        </FadeInContent>
        <FadeInContent delay={CONTENT_DELAY_TIME}>
          <Velog />
        </FadeInContent>
        <FadeInContent delay={CONTENT_DELAY_TIME}>
          <YouTube />
        </FadeInContent>
      </Styled.ExperienceContainer>

      <Styled.ExperienceContainer>
        <FadeInContent delay={CONTENT_DELAY_TIME}>
          <ExperienceTitle title="Open Source" />
        </FadeInContent>
        <FadeInContent delay={CONTENT_DELAY_TIME}>
          <Vite />
        </FadeInContent>
        <FadeInContent delay={CONTENT_DELAY_TIME}>
          <GoogleWebFundamentals />
        </FadeInContent>
        <FadeInContent delay={CONTENT_DELAY_TIME}>
          <ReactContribute />
        </FadeInContent>
        <FadeInContent delay={CONTENT_DELAY_TIME}>
          <Kubernetes />
        </FadeInContent>
      </Styled.ExperienceContainer>

      {/* <FadeInContent delay={0.5}>
        <Styled.ExperienceContainer>
          <ExperienceTitle title="Skill" />
          <Hayanmind />
        </Styled.ExperienceContainer>
      </FadeInContent> */}
    </Styled.Container>
  );
};

export default Experience;
