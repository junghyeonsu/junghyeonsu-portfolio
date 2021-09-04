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
  height: 100vh;
  width: 100vw;
  background-color: #511281;
`;

const data = {
  title: '포트폴리오 개발',
  date: '2021년 7월 - 2021년 8월',
  bodyTexts: ['나만의 포트폴리오 페이지 개발'],
  hyperlinks: [
    {
      href: 'https://github.com/junghyeonsu/hyeonsu-jung',
      text: '깃허브 주소',
    },
    {
      href: 'https://velog.io/@junghyeonsu/%EB%82%98%EB%A7%8C%EC%9D%98-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%A0%9C%EC%9E%91%EA%B8%B0',
      text: '개발 후기',
    },
  ],
  skills: ['React', 'Typescript', 'NextJS', 'styled-components', 'Vercel'],
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
