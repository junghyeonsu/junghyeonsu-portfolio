import React from 'react';
import * as Styled from '../../styled';
import { Explain, Link, InlineLinkText } from '../../common';

const FindDifferentColor = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTopContainer>
        <Styled.ExperienceCardTitleType>프로젝트</Styled.ExperienceCardTitleType>
        <Styled.ExperienceCardTitle>
          🧑‍💻 <InlineLinkText href="https://find-different-color.vercel.app/">다른 색깔 찾기 게임</InlineLinkText>
        </Styled.ExperienceCardTitle>

        <Styled.ExperienceCardExplainContainer>
          <Explain>
            <InlineLinkText href="https://www.numble.it/?t=1643872858661#c2c8e9ba996c4dd197a5e13af68bfeea">Numble</InlineLinkText>
            에서 진행하는 챌린지 참여
          </Explain>
          <Explain>요구사항 구현 이후 랭킹 시스템까지 도입</Explain>
          <Explain>
            챌린지 내 상위 10% 달성 <InlineLinkText href="https://www.numble.it/45cee9d3-49ad-4f67-9d2a-14607c2eeba7">(점수 기준)</InlineLinkText>
          </Explain>
        </Styled.ExperienceCardExplainContainer>

        <Styled.HyperLinkContainer>
          <Link href="https://github.com/junghyeonsu/find-different-color">GitHub Repository</Link>
          <Link href="https://velog.io/@junghyeonsu/React-Numble-Challenge-%EB%8B%A4%EB%A5%B8-%EC%83%89%EA%B9%94-%EC%B0%BE%EA%B8%B0-%EA%B2%8C%EC%9E%84-%EB%A7%8C%EB%93%A4%EA%B8%B0">
            챌린지 참여 회고 블로그 포스팅
          </Link>
        </Styled.HyperLinkContainer>

        <Styled.SkillContainer>
          <Styled.SkillItem>React</Styled.SkillItem>
          <Styled.SkillItem>TypeScript</Styled.SkillItem>
          <Styled.SkillItem>react-router-dom</Styled.SkillItem>
          <Styled.SkillItem>styled-components</Styled.SkillItem>
          <Styled.SkillItem>ESLint</Styled.SkillItem>
          <Styled.SkillItem>Prettier</Styled.SkillItem>
          <Styled.SkillItem>Vercel</Styled.SkillItem>
        </Styled.SkillContainer>
      </Styled.ExperienceCardTopContainer>
    </Styled.ExperienceCard>
  );
};

export default FindDifferentColor;
