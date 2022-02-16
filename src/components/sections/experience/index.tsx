import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';

import { FadeInContent } from '#/components/common/gsap';
import YellowPoint from '#/components/common/YellowPoint';

import Content from '#/components/sections/experience/content';
import * as Styled from '#/components/sections/experience/styled';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: rgb(245, 245, 245);
  color: black;
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 70px;
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
      <FadeInContent delay={0.5}>
        <ExperienceContainer>
          <Styled.ExperienceTitle>
            Work<YellowPoint>.</YellowPoint>
          </Styled.ExperienceTitle>

          {Content.work.map(work => {
            return (
              <Styled.ExperienceCard>
                <Styled.ExperienceCardTopContainer>
                  <Styled.ExperienceCardTitleType>{work.type}</Styled.ExperienceCardTitleType>
                  <Styled.ExperienceCardTitle>{work.title}</Styled.ExperienceCardTitle>
                  <Styled.ExperienceCardPeriod>{work.period}</Styled.ExperienceCardPeriod>

                  <Styled.ExperienceCardExplainContainer>
                    {work.explains.map(explain => {
                      return (
                        <Styled.ExperienceCardExplain>
                          <Styled.ExplainCheckIcon />
                          {explain}
                        </Styled.ExperienceCardExplain>
                      );
                    })}
                  </Styled.ExperienceCardExplainContainer>

                  <Styled.HyperLinkContainer>
                    {work.link &&
                      work.link.map(link => (
                        <Styled.HyperLink href={link.href} target="_blank">
                          <Styled.HyperLinkIcon />
                          {link.text}
                        </Styled.HyperLink>
                      ))}
                  </Styled.HyperLinkContainer>
                </Styled.ExperienceCardTopContainer>
              </Styled.ExperienceCard>
            );
          })}
        </ExperienceContainer>
      </FadeInContent>

      <FadeInContent delay={0.5}>
        <ExperienceContainer>
          <Styled.ExperienceTitle>
            Project<YellowPoint>.</YellowPoint>
          </Styled.ExperienceTitle>

          {Content.work.map(work => {
            return (
              <Styled.ExperienceCard>
                <Styled.ExperienceCardTopContainer>
                  <Styled.ExperienceCardTitleType>{work.type}</Styled.ExperienceCardTitleType>
                  <Styled.ExperienceCardTitle>{work.title}</Styled.ExperienceCardTitle>
                  <Styled.ExperienceCardPeriod>{work.period}</Styled.ExperienceCardPeriod>
                </Styled.ExperienceCardTopContainer>
              </Styled.ExperienceCard>
            );
          })}
        </ExperienceContainer>
      </FadeInContent>

      <FadeInContent delay={0.5}>
        <ExperienceContainer>
          <Styled.ExperienceTitle>
            Open Source<YellowPoint>.</YellowPoint>
          </Styled.ExperienceTitle>

          {Content.work.map(work => {
            return (
              <Styled.ExperienceCard>
                <Styled.ExperienceCardTopContainer>
                  <Styled.ExperienceCardTitleType>{work.type}</Styled.ExperienceCardTitleType>
                  <Styled.ExperienceCardTitle>{work.title}</Styled.ExperienceCardTitle>
                  <Styled.ExperienceCardPeriod>{work.period}</Styled.ExperienceCardPeriod>
                </Styled.ExperienceCardTopContainer>
              </Styled.ExperienceCard>
            );
          })}
        </ExperienceContainer>
      </FadeInContent>

      <FadeInContent delay={0.5}>
        <ExperienceContainer>
          <Styled.ExperienceTitle>
            Skill<YellowPoint>.</YellowPoint>
          </Styled.ExperienceTitle>

          {Content.work.map(work => {
            return (
              <Styled.ExperienceCard>
                <Styled.ExperienceCardTopContainer>
                  <Styled.ExperienceCardTitleType>{work.type}</Styled.ExperienceCardTitleType>
                  <Styled.ExperienceCardTitle>{work.title}</Styled.ExperienceCardTitle>
                  <Styled.ExperienceCardPeriod>{work.period}</Styled.ExperienceCardPeriod>
                </Styled.ExperienceCardTopContainer>
              </Styled.ExperienceCard>
            );
          })}
        </ExperienceContainer>
      </FadeInContent>
    </Container>
  );
};

export default Experience;
