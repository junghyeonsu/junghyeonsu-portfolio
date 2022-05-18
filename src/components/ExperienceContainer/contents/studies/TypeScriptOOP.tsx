import React from 'react';
import * as Styled from '../../styled';
import { Explain, Links } from '../../common';

const LINKS = [
  {
    text: '미션 진행 GitHub Repository',
    href: 'https://github.com/FECrash/TypeScript-OOP',
  },
  {
    text: '미션 진행 Pull Request',
    href: 'https://github.com/FECrash/TypeScript-OOP/pull/10',
  },
];

const TypeScriptOOP = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>스터디</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="타입스크립트-객체지향-스터디">타입스크립트 객체지향 스터디</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2022년 5월 9일 - 진행중</Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardExplainContainer>
        <Explain>주어진 과제에 타입스크립트를 사용해서 객체지향적으로 설계해보는 스터디</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
    </Styled.ExperienceCard>
  );
};

export default TypeScriptOOP;
