import React, { useRef, useEffect } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { ExperienceTitle } from './common';
import { useLayoutContext } from '#/contexts/LayoutContext';
import { FadeInContent } from '#/components/gsap';
import TableOfContents from '../TableOfContents';
import * as Styled from './styled';
import * as Content from './contents';

const CONTENT_DELAY_TIME = 0.3;

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
            <Content.Hayanmind />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.SatrecI />
          </FadeInContent>
        </Styled.ExperienceContainer>

        <Styled.ExperienceContainer>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <ExperienceTitle title="Project" />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.ReactSeasonComponent />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.FindDifferentColor />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.Portfolio />
          </FadeInContent>
        </Styled.ExperienceContainer>

        <Styled.ExperienceContainer>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <ExperienceTitle title="Share" />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.Tistory />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.Velog />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.YouTube />
          </FadeInContent>
        </Styled.ExperienceContainer>

        <Styled.ExperienceContainer>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <ExperienceTitle title="Education" />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.Univercity />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.WooahanTechCource />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.NextStepCleanCodeWithJavaScript />
          </FadeInContent>
        </Styled.ExperienceContainer>

        <Styled.ExperienceContainer>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <ExperienceTitle title="OpenSource" />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.MDNWebDocsClass />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.Vite />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.GoogleWebFundamentals />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.ReactContribute />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.Kubernetes />
          </FadeInContent>
        </Styled.ExperienceContainer>
      </Styled.Contents>
    </Styled.Container>
  );
};

export default Experience;
