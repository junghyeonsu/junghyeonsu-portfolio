import React from 'react';
import * as Styled from '../../styled';
import { Explain, InlineLinkText, Links } from '../../common';

const LINKS = [
  {
    text: '공부한 내용 올리는 레파지토리',
    href: 'https://github.com/junghyeonsu/type-challenges-study',
  },
];

const TypeChallengeStudy = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>개인 공부</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="타입-챌린지-풀기">타입 챌린지 풀기</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2022년 5월 31일 - 진행중</Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardExplainContainer>
        <Explain><InlineLinkText href="https://github.com/type-challenges/type-challenges">타입 챌린지</InlineLinkText>를 한 문제씩 풀면서 타입스크립트 공부하기</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
    </Styled.ExperienceCard>
  );
};

export default TypeChallengeStudy;
