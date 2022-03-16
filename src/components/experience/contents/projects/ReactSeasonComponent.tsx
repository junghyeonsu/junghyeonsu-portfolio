import React from 'react';
import * as Styled from '../../styled';
import { Explain, InlineLinkText, Todos, Skills, Links } from '../../common';
import EXPLAIN from './explains';

const LINKS = [
  {
    text: 'React npm 배포 관련 블로그 포스팅',
    href: 'https://velog.io/@junghyeonsu/NPM-%EB%B0%B0%ED%8F%AC-%EC%96%B4%EB%A0%B5%EC%A7%80-%EC%95%8A%EC%95%84%EC%9A%94-with-%ED%85%8C%EC%98%A4-%EA%B5%AC%EA%B8%80-%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8-4%EA%B8%B0',
  },
  {
    text: 'GitHub Repository',
    href: 'https://github.com/PPO-F-MAN/react-season-component',
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
    skill: 'styled-components',
    explain: `${EXPLAIN.styledComponents}\n 하지만 CSS-in-JS보다 CSS-in-CSS가 속도가 더 빠르고, UI 컴포넌트 라이브러리인 만큼 유저 경험이 중요하기 때문에 더 나은 속도를 제공하기 위해 CSS-in-CSS로 변경할 예정입니다.`,
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
    skill: 'github pages',
    explain: EXPLAIN.githubPages,
  },
  {
    skill: 'github actions',
    explain: EXPLAIN.githubActions,
  },
];

const TODOS = [
  {
    text: 'CSS-IN-JS를 CSS-IN-CSS로 바꾸기',
    checked: false,
  },
];

const ReactSeasonComponent = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>프로젝트</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="react-season-component">
        <InlineLinkText href="https://www.npmjs.com/package/react-season-component">react-season-component</InlineLinkText>
      </Styled.ExperienceCardTitle>

      <Styled.ExperienceCardExplainContainer>
        <Explain>React background component npm 라이브러리 개발</Explain>
        <Explain>
          <InlineLinkText href="https://velog.io/@teo/google-sprint-4">테오 구글 스프린트 4기</InlineLinkText>에 참여
        </Explain>
        <Explain>디자인 1명, 개발자 7명에서 프로젝트 리더로 시간 조율 및 회의 진행 담당</Explain>
        <Explain>npm 배포 과정 및 3개의 컴포넌트 중 Time 컴포넌트 개발 담당</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
      <Skills skills={SKILLS} />
      <Todos todos={TODOS} />
    </Styled.ExperienceCard>
  );
};

export default ReactSeasonComponent;
