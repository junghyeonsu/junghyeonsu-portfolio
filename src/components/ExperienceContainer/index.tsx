import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { ExperienceTitle } from './common';
import { FadeInContent } from '#/components/gsap';
import TableOfContents from '../TableOfContents';
import * as Styled from './styled';
import * as Content from './contents';

const CONTENT_DELAY_TIME = 0.3;

const ExperienceContainer = () => {
  const isOver1100px = useMediaQuery('(min-width:1100px)');

  return (
    <Styled.Container id="experience-container">
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
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Content.당근마켓 />
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
            <Content.MyTechBlogAsProjects />
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
            <Content.MyTechBlogAsShares />
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
            <Content.NextStepCleanCodeWithJavaScript />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.WooahanTechCource />
          </FadeInContent>
        </Styled.ExperienceContainer>

        <Styled.ExperienceContainer>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <ExperienceTitle title="OpenSource" />
          </FadeInContent>

          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.TypeChallenges />
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

        <Styled.ExperienceContainer>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <ExperienceTitle title="Study" />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.FrontEndJobPrepare />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.ModernJavaScriptDeepDive />
          </FadeInContent>
        </Styled.ExperienceContainer>

        <Styled.ExperienceContainer>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <ExperienceTitle title="Posted" />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.FastCampus />
          </FadeInContent>
        </Styled.ExperienceContainer>
      </Styled.Contents>
    </Styled.Container>
  );
};

export default ExperienceContainer;
