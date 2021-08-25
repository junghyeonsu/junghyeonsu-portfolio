import React from 'react';
import styled from 'styled-components';

import { FadeInContent } from '#/components/common/gsap';
import { FADE_IN_DELAY } from '#/constants';

import CardContainer from '#/components/sections/experience/cards/CardContainer';
import CardHeader from '#/components/sections/experience/cards/CardHeader';
import CardBody from '#/components/sections/experience/cards/CardBody';
import CardBodyText from '#/components/sections/experience/cards/CardBodyText';
import CardBodyTextContainer from '#/components/sections/experience/cards/CardBodyTextContainer';
import Hyperlink from '#/components/sections/experience/cards/Hyperlink';
import HyperlinkContainer from '#/components/sections/experience/cards/HyperlinkContainer';
import SkillList from '#/components/sections/experience/cards/SkillList';
import SkillItem from '#/components/sections/experience/cards/SkillItem';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(var(--vh, 1vh) * 100);
  width: calc(var(--vw, 1vw) * 100);
  background-color: #2b2b2b;
`;

const data = {
  title: 'SW 중심대학 해커톤',
  date: '2021년 2월 4일 - 2021년 2월 6일',
  bodyTexts: ['언택트 시대의 문화·예술 공유 플랫폼 [ 여운 ] 제작'],
  hyperlinks: [
    {
      href: 'https://github.com/yeo-un/yeo-un',
      text: '깃허브 레파지토리',
    },
    {
      href: 'https://yeo-un.github.io/yeo-un/',
      text: '프론트 배포',
    },
  ],
  skills: ['React', 'Axios', 'react-router', 'styled-components'],
};

const Component = () => {
  return (
    <FadeInContent delay={FADE_IN_DELAY}>
      <Container>
        <CardContainer>
          <CardHeader title={data.title} date={data.date} />
          <CardBody>
            <CardBodyTextContainer>
              {data.bodyTexts.map(bodyText => {
                return <CardBodyText text={bodyText} key={bodyText} />;
              })}
            </CardBodyTextContainer>
            <HyperlinkContainer>
              {data.hyperlinks.map(hyperlink => {
                return (
                  <Hyperlink
                    key={hyperlink.text}
                    href={hyperlink.href}
                    text={hyperlink.text}
                  />
                );
              })}
            </HyperlinkContainer>
          </CardBody>
          <SkillList>
            {data.skills.map(skill => {
              return <SkillItem key={skill} skill={skill} />;
            })}
          </SkillList>
        </CardContainer>
      </Container>
    </FadeInContent>
  );
};

export default Component;
