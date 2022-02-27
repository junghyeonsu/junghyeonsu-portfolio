import React, { useRef, useEffect } from 'react';
import ExperienceTitle from './common/ExperienceTitle';
import { useLayoutContext } from '#/contexts/LayoutContext';
import { FadeInContent } from '#/components/gsap';
import * as Styled from '#/components/Experience/styled';
import {
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

const Experience = () => {
  const { setExperienceOffsetTop, windowWidth }: any = useLayoutContext(); // eslint-disable-line
  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const containerOffsetTop = containerRef.current.offsetTop;
    setExperienceOffsetTop(containerOffsetTop);
  }, [setExperienceOffsetTop, windowWidth]);

  return (
    <Styled.Container ref={containerRef}>
      <FadeInContent delay={0.5}>
        <Styled.ExperienceContainer>
          <ExperienceTitle title="Work" />
          <Hayanmind />
          <SatrecI />
        </Styled.ExperienceContainer>
      </FadeInContent>

      <FadeInContent delay={0.5}>
        <Styled.ExperienceContainer>
          <ExperienceTitle title="Project" />
          <ReactSeasonComponent />
          <FindDifferentColor />
          <Portfolio />
        </Styled.ExperienceContainer>
      </FadeInContent>

      <FadeInContent delay={0.5}>
        <Styled.ExperienceContainer>
          <ExperienceTitle title="Share" />
          <Tistory />
          <Velog />
          <YouTube />
        </Styled.ExperienceContainer>
      </FadeInContent>

      <FadeInContent delay={0.5}>
        <Styled.ExperienceContainer>
          <ExperienceTitle title="Open Source" />
          <Vite />
          <GoogleWebFundamentals />
          <ReactContribute />
          <Kubernetes />
        </Styled.ExperienceContainer>
      </FadeInContent>

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
