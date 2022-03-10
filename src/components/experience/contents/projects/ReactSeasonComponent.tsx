import React from 'react';
import * as Styled from '../../styled';
import { Explain, Link, InlineLinkText } from '../../common';

const ReactSeasonComponent = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTopContainer>
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

        <Styled.HyperLinkContainer>
          <Link href="https://velog.io/@junghyeonsu/NPM-%EB%B0%B0%ED%8F%AC-%EC%96%B4%EB%A0%B5%EC%A7%80-%EC%95%8A%EC%95%84%EC%9A%94-with-%ED%85%8C%EC%98%A4-%EA%B5%AC%EA%B8%80-%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8-4%EA%B8%B0">
            React npm 배포 관련 블로그 포스팅
          </Link>
          <Link href="https://github.com/PPO-F-MAN/react-season-component">GitHub Repository</Link>
        </Styled.HyperLinkContainer>

        <Styled.SkillContainer>
          <Styled.SkillItem>React</Styled.SkillItem>
          <Styled.SkillItem>TypeScript</Styled.SkillItem>
          <Styled.SkillItem>styled-components</Styled.SkillItem>
          <Styled.SkillItem>MUI</Styled.SkillItem>
          <Styled.SkillItem>ESLint</Styled.SkillItem>
          <Styled.SkillItem>Prettier</Styled.SkillItem>
          <Styled.SkillItem>github pages</Styled.SkillItem>
          <Styled.SkillItem>github actions</Styled.SkillItem>
        </Styled.SkillContainer>
      </Styled.ExperienceCardTopContainer>
    </Styled.ExperienceCard>
  );
};

export default ReactSeasonComponent;
