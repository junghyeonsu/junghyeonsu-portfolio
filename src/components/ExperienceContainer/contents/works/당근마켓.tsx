import React from 'react';

import { Explain, InlineLinkText, Links } from '../../common';
import * as Styled from '../../styled';

const LINKS = [
  {
    href: 'https://github.com/daangn/codepocket',
    text: 'codepocket',
  },
  {
    href: 'https://junghyeonsu-dev.vercel.app/posts/Daangn-intern-middle-retrospect',
    text: '인턴 중간 회고록',
  },
];

const 당근마켓 = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>인턴</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="당근마켓">
        <InlineLinkText href="https://team.daangn.com/">당근마켓</InlineLinkText>🥕
      </Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2022년 6월 27일 - (진행중)</Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardExplainContainer>
        <Explain>사내 개발자들의 DX를 향상시켜주는 프론트엔드코어팀 소속</Explain>
        <Explain>흩어진 팀의 중복된 노력을 줄여주기 위한 프로젝트 Codepocket 진행</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
    </Styled.ExperienceCard>
  );
};

export default 당근마켓;
