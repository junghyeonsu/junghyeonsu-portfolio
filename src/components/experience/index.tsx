import React, { useRef, useEffect } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { ExperienceTitle } from './common';
import { useLayoutContext } from '#/contexts/LayoutContext';
import { FadeInContent } from '#/components/gsap';
import TableOfContents from '../TableOfContents';
import * as Styled from './styled';
import {
  Univercity,
  WooahanTechCource,
  NextStepCleanCodeWithJavaScript,
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
  MDNWebDocsClass,
} from './contents';

const CONTENT_DELAY_TIME = 0.6;

const Experience = () => {
  const { setExperienceOffsetTop, windowWidth }: any = useLayoutContext(); // eslint-disable-line
  const isOver1100px = useMediaQuery('(min-width:1100px)');
  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const containerOffsetTop = containerRef.current.offsetTop;
    setExperienceOffsetTop(containerOffsetTop);
  }, [setExperienceOffsetTop, windowWidth]);

  return (
    <Styled.Container id="experience-container" ref={containerRef}>
      {isOver1100px && (
        <Styled.TableOfContents>
          <TableOfContents />
        </Styled.TableOfContents>
      )}
      <Styled.Contents>
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
            <ExperienceTitle title="Education" />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Univercity />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <WooahanTechCource />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <NextStepCleanCodeWithJavaScript />
          </FadeInContent>
        </Styled.ExperienceContainer>

        <Styled.ExperienceContainer>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <ExperienceTitle title="OpenSource" />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <MDNWebDocsClass />
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
      </Styled.Contents>
    </Styled.Container>
  );
};

export default Experience;
