import React from 'react';
import * as Styled from '../../styled';
import { Explain, Skills, Links, InlineLinkText } from '../../common';
import EXPLAIN from './explains';

const LINKS = [
  {
    text: 'GitHub Repository',
    href: 'https://github.com/junghyeonsu/find-different-color',
  },
  {
    text: '챌린지 참여 회고 블로그 포스팅',
    href: 'https://velog.io/@junghyeonsu/React-Numble-Challenge-%EB%8B%A4%EB%A5%B8-%EC%83%89%EA%B9%94-%EC%B0%BE%EA%B8%B0-%EA%B2%8C%EC%9E%84-%EB%A7%8C%EB%93%A4%EA%B8%B0',
  },
];

const SKILLS = [
  {
    skill: 'React',
    explain: EXPLAIN.react,
  },
  {
    skill: 'TypeScript',
    explain: EXPLAIN.typescript,
  },
  {
    skill: 'react-router-dom',
    explain: EXPLAIN.reactRouterDom,
  },
  {
    skill: 'styled-components',
    explain: EXPLAIN.styledComponents,
  },
  {
    skill: 'ESLint',
    explain: EXPLAIN.eslint,
  },
  {
    skill: 'Prettier',
    explain: EXPLAIN.prettier,
  },
  {
    skill: 'Vercel',
    explain: EXPLAIN.vercel,
  },
];

const FindDifferentColor = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>프로젝트</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="다른-색깔-찾기-게임">
        <InlineLinkText href="https://find-different-color.vercel.app/">다른 색깔 찾기 게임</InlineLinkText>
      </Styled.ExperienceCardTitle>

      <Styled.ExperienceCardExplainContainer>
        <Explain>
          <InlineLinkText href="https://www.numble.it/?t=1643872858661#c2c8e9ba996c4dd197a5e13af68bfeea">Numble</InlineLinkText>
          에서 진행하는 챌린지 참여
        </Explain>
        <Explain>
          챌린지 내 상위 10% 달성 <InlineLinkText href="https://www.numble.it/45cee9d3-49ad-4f67-9d2a-14607c2eeba7">(점수 기준)</InlineLinkText>
        </Explain>
        <Explain>전역 상태 라이브러리를 사용하지 않고 state, props를 적절한 위치에 구현</Explain>
        <Explain>챌린지 이후 firestore를 이용한 랭킹 시스템 구현</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
      <Skills skills={SKILLS} />
    </Styled.ExperienceCard>
  );
};

export default FindDifferentColor;
