import React from 'react';

import { Explain, InlineLinkText, Links } from '../../common';
import * as Styled from '../../styled';

const LINKS = [
  {
    text: '프론트엔드 로드맵 발표 내용 정리 GitHub Repository',
    href: 'https://github.com/Frontend-Interviewers/questions',
  },
];

const FrontEndJobPrepare = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>스터디</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="프론트엔드-취업-준비-스터디">프론트엔드 취업 준비 스터디</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2022년 4월 28일 - 진행중</Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardExplainContainer>
        <Explain>일주일동안 프로그래머스 일정 문제 수 만큼 알고리즘 문제 풀기</Explain>
        <Explain>
          일주일동안 <InlineLinkText href="https://roadmap.sh/frontend">프론트엔드 로드맵</InlineLinkText>을 기준으로 정해진 주제에 대해서 조사하고 한
          명씩 발표하기
        </Explain>
        <Explain>정리는 모든 사람이 전부 진행, 발표는 일주일에 한 명씩 진행</Explain>
        <Explain>참여인원 5명</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
    </Styled.ExperienceCard>
  );
};

export default FrontEndJobPrepare;
