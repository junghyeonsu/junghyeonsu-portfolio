import React from 'react';
import * as Styled from '../../styled';
import { Explain, Links, Skills, InlineLinkText } from '../../common';
import EXPLAIN from './explains';

const VERSION_ONE_LINKS = [
  {
    text: 'GitHub Repository',
    href: 'https://github.com/junghyeonsu/introduce-myself/tree/master',
  },
];

const VERSION_ONE_SKILLS = [
  {
    skill: 'React',
    explain: EXPLAIN.react,
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
    skill: 'github pages',
    explain: EXPLAIN.githubPages,
  },
];

const VERSION_TWO_LINKS = [
  {
    text: 'GitHub Repository',
    href: 'https://github.com/junghyeonsu/hyeonsu-jung/tree/version/1',
  },
  {
    text: '포트폴리오 개발 후 회고 블로그 포스팅',
    href: 'https://velog.io/@junghyeonsu/%EB%82%98%EB%A7%8C%EC%9D%98-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%A0%9C%EC%9E%91%EA%B8%B0',
  },
];

const VERSION_TWO_SKILLS = [
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

const VERSION_THREE_LINKS = [
  {
    text: 'GitHub Repository',
    href: 'https://github.com/junghyeonsu/hyeonsu-jung/tree/main',
  },
];

const VERSION_THREE_SKILLS = [
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
      <Styled.ExperienceCardTitleType>프로젝트</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="나만의-포트폴리오-개발">나만의 포트폴리오 개발</Styled.ExperienceCardTitle>
      <Explain>남들 다 쓰는 notion 포트폴리오 말고, 나만의 포트폴리오를 가지기 위해서 개발</Explain>

      {/* Version 1 */}
      <Styled.ExperienceCardSubTitle id="나만의-포트폴리오-개발-version-1">
        <InlineLinkText href="https://junghyeonsu.github.io/introduce-myself/">Version 1</InlineLinkText>
      </Styled.ExperienceCardSubTitle>
      <Styled.ExperienceCardPeriod>2020년 12월 개발</Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardExplainContainer>
        <Explain>React로 간단하게 포트폴리오 개발</Explain>
      </Styled.ExperienceCardExplainContainer>

      <Links links={VERSION_ONE_LINKS} />
      <Skills skills={VERSION_ONE_SKILLS} />

      {/* Version 2 */}
      <Styled.ExperienceCardSubTitle id="나만의-포트폴리오-개발-version-2">
        <InlineLinkText href="https://hyeonsu-jung-f2yuujuwd-junghyeonsu.vercel.app/">Version 2</InlineLinkText>
      </Styled.ExperienceCardSubTitle>
      <Styled.ExperienceCardPeriod>2021년 7월 - 8월 개발</Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardExplainContainer>
        <Explain>포트폴리오를 조금 더 예쁘게 만들고 싶은 마음에 개발 시작</Explain>
        <Explain>포트폴리오의 내용보단 내가 구현해보고 싶은 디자인들 구현</Explain>
      </Styled.ExperienceCardExplainContainer>

      <Links links={VERSION_TWO_LINKS} />
      <Skills skills={VERSION_TWO_SKILLS} />

      {/* Version 3 */}
      <Styled.ExperienceCardSubTitle id="나만의-포트폴리오-개발-version-3">Version 3 (현재 포트폴리오)</Styled.ExperienceCardSubTitle>
      <Styled.ExperienceCardPeriod>2022년 1월 - 2월 개발</Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardExplainContainer>
        <Explain>포트폴리오는 내용이 중요할 것 같아서 다시 리모델링</Explain>
        <Explain>두번째 포트폴리오에서 포트폴리오에 필요한 내용들 위주로 변경</Explain>
      </Styled.ExperienceCardExplainContainer>

      <Links links={VERSION_THREE_LINKS} />
      <Skills skills={VERSION_THREE_SKILLS} />
    </Styled.ExperienceCard>
  );
};

export default Portfolio;
