import React from 'react';
import * as Styled from '../../styled';
import { Explain, InlineLinkText, Links } from '../../common';

const LINKS = [
  {
    text: '스터디 진행 GitHub Repository',
    href: 'https://github.com/PPO-F-MAN/modern-javascript-deep-dive',
  },
];

const ModernJavaScriptDeepDive = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>스터디</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="모던-자바스크립트-딥다이브-스터디">모던 자바스크립트 딥다이브 스터디</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardExplainContainer>
        <Explain>
          <InlineLinkText href="http://www.yes24.com/Product/Goods/92742567">모던 자바스크립트 딥다이브</InlineLinkText>를 일주일에{' '}
          <InlineLinkText href="https://www.inflearn.com/course/%EB%AA%A8%EB%8D%98-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%94%A5%EB%8B%A4%EC%9D%B4%EB%B8%8C/dashboard">
            인프런 강의
          </InlineLinkText>{' '}
          기준으로 2개의 챕터 읽기
        </Explain>
        <Explain>정리는 모든 사람이 전부 진행, 발표는 일주일에 두 명씩 진행</Explain>
        <Explain>참여인원 6명</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
    </Styled.ExperienceCard>
  );
};

export default ModernJavaScriptDeepDive;
