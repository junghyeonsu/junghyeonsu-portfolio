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
  background-color: #2c5aa7;
`;

const data = {
  title: '쎄트렉아이 인턴',
  date: '2020년 7월 - 2020년 8월',
  bodyTexts: [
    '약 두 달간 회사의 데브옵스 적용을 위한 작업',
    'Ansible을 이용해 Kubernetes 환경 구축 및 고가용성 유지를 위한 테스트',
  ],
  hyperlinks: [
    {
      href: ' https://junghyeonsu.tistory.com/60?category=797646',
      text: '인턴 중 올린 포스트 모음',
    },
    {
      href: ' https://www.satreci.com/korean',
      text: '회사 페이지',
    },
  ],
  skills: ['Kubernetes', 'Docker', 'Docker-Compose', 'Ansible'],
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
