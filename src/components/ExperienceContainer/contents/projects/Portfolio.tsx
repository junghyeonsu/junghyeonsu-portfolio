import React from 'react';
import * as Styled from '../../styled';
import { Explain, Links, Skills } from '../../common';
import EXPLAIN from './explains';

const LINKS = [
  {
    text: '그런 포트폴리오로 괜찮은가 | 포트폴리오 리모델링 후 올렸던 블로그 포스팅',
    href: 'https://velog.io/@junghyeonsu/%EA%B7%B8%EB%9F%B0-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%EB%A1%9C-%EA%B4%9C%EC%B0%AE%EC%9D%80%EA%B0%80',
  },
  {
    text: '현재 포트폴리오 GitHub Repository',
    href: 'https://github.com/junghyeonsu/hyeonsu-jung/tree/main',
  },
  {
    text: '두번 째 포트폴리오 GitHub Repository (Regacy)',
    href: 'https://github.com/junghyeonsu/hyeonsu-jung/tree/version/1',
  },
  {
    text: '나만의 포트폴리오 제작기 | 두번 째 포트폴리오 개발 후 회고 블로그 포스팅',
    href: 'https://velog.io/@junghyeonsu/%EB%82%98%EB%A7%8C%EC%9D%98-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%A0%9C%EC%9E%91%EA%B8%B0',
  },
  {
    text: '첫번 째 포트폴리오 GitHub Repository (Regacy)',
    href: 'https://github.com/junghyeonsu/introduce-myself/tree/master',
  },
];

const SKILLS = [
  {
    skill: 'React',
    explain: EXPLAIN.react,
  },
  {
    skill: 'Next.JS',
    explain: EXPLAIN.nextjs,
  },
  {
    skill: 'TypeScript',
    explain: EXPLAIN.typescript,
  },
  {
    skill: 'styled-components',
    explain: EXPLAIN.styledComponents,
  },
  {
    skill: 'MUI',
    explain: EXPLAIN.mui,
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

const Portfolio = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>개인 프로젝트</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="나만의-포트폴리오-개발">나만의 포트폴리오 개발 (현재 페이지)</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2022년 1월 - 3월 개발</Styled.ExperienceCardPeriod>
      <Explain>나만의 포트폴리오를 가지기 위해서 개발</Explain>
      <Links links={LINKS} />
      <Skills skills={SKILLS} />
    </Styled.ExperienceCard>
  );
};

export default Portfolio;
