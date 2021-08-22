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
  width: 100vw;
  height: 100vh;
  background-color: #df2e2e;
`;

const data = {
  title: '하얀마인드 인턴',
  date: '2021년 3월 - 2021년 6월',
  bodyTexts: [
    '영어 쉐도잉 애플리케이션 제작 스타트업의 프론트엔드 개발자로 참여',
    'B2B 사이트 제작 프로젝트, B2B 소개 페이지 제작 프로젝트 참여',
    '관리자 페이지를 만들어 퀴즈와 퀴즈 정답 관리',
  ],
  hyperlinks: [
    {
      href: 'https://velog.io/@junghyeonsu/회고록-5월-및-인턴-회고',
      text: '인턴 회고록 블로그 포스트',
    },
    {
      href: 'https://redkiwiapp.com/ko/b2b',
      text: 'B2B 소개 페이지',
    },
  ],
  skills: [
    'React',
    'react-admin',
    'Next JS',
    'Typescript',
    'styled-components',
    'Firebase',
  ],
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
