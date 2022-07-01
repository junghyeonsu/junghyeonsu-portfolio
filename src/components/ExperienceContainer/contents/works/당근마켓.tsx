import React from 'react';
import * as Styled from '../../styled';
import { /* Explain, Links, */ InlineLinkText } from '../../common';

// const LINKS = [
//   {
//     href: 'https://redkiwiapp.com/ko/b2b',
//     text: 'B2B 프로그램 소개 페이지',
//   },
//   {
//     href: 'https://velog.io/@junghyeonsu/회고록-5월-및-인턴-회고',
//     text: '인턴 회고록 블로그 포스트 (어려웠던 점, 느낀 점 등등 정리)',
//   },
// ];

const 당근마켓 = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>인턴</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="당근마켓">
        🥕 <InlineLinkText href="https://team.daangn.com/">당근마켓</InlineLinkText>
      </Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2022년 6월 27일 - 2022년 8월 26일(진행중)</Styled.ExperienceCardPeriod>

      <Styled.ExperienceCardExplainContainer />

      {/* <Links links={LINKS} /> */}
    </Styled.ExperienceCard>
  );
};

export default 당근마켓;
