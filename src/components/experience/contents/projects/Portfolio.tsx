import React from 'react';
import * as Styled from '../../styled';
import { Explain, Link, InlineLinkText } from '../../common';

const Portfolio = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTopContainer>
        <Styled.ExperienceCardTitleType>프로젝트</Styled.ExperienceCardTitleType>
        <Styled.ExperienceCardTitle>🧑‍💻 나만의 포트폴리오 개발</Styled.ExperienceCardTitle>

        {/* Version 1 */}
        <Styled.ExperienceCardSubTitle>
          <InlineLinkText href="https://junghyeonsu.github.io/introduce-myself/">🚀 첫번째 포트폴리오</InlineLinkText>
        </Styled.ExperienceCardSubTitle>
        <Styled.ExperienceCardPeriod>2020년 12월 개발</Styled.ExperienceCardPeriod>
        <Styled.ExperienceCardExplainContainer>
          <Explain>React로 간단하게 포트폴리오 개발</Explain>
        </Styled.ExperienceCardExplainContainer>
        <Styled.SkillContainer>
          <Styled.SkillItem>React</Styled.SkillItem>
          <Styled.SkillItem>TypeScript</Styled.SkillItem>
        </Styled.SkillContainer>

        {/* Version 2 */}
        <Styled.ExperienceCardSubTitle>
          <InlineLinkText href="https://hyeonsu-jung-f2yuujuwd-junghyeonsu.vercel.app/">🚀 두번째 포트폴리오</InlineLinkText>
        </Styled.ExperienceCardSubTitle>
        <Styled.ExperienceCardPeriod>2021년 7월 - 8월 개발</Styled.ExperienceCardPeriod>
        <Styled.ExperienceCardExplainContainer>
          <Explain>포트폴리오를 조금 더 예쁘게 만들고 싶은 마음에 개발 시작</Explain>
          <Explain>포트폴리오의 내용보단 내가 구현해보고 싶은 디자인들 구현</Explain>
        </Styled.ExperienceCardExplainContainer>
        <Styled.HyperLinkContainer>
          <Link href="https://velog.io/@junghyeonsu/%EB%82%98%EB%A7%8C%EC%9D%98-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%A0%9C%EC%9E%91%EA%B8%B0">
            포트폴리오 개발 후 회고 블로그 포스팅
          </Link>
        </Styled.HyperLinkContainer>
        <Styled.SkillContainer>
          <Styled.SkillItem>React</Styled.SkillItem>
          <Styled.SkillItem>TypeScript</Styled.SkillItem>
        </Styled.SkillContainer>

        {/* Version 3 */}
        <Styled.ExperienceCardSubTitle>🚀 현재 포트폴리오</Styled.ExperienceCardSubTitle>
        <Styled.ExperienceCardPeriod>2022년 1월 - 2월 개발</Styled.ExperienceCardPeriod>
        <Styled.ExperienceCardExplainContainer>
          <Explain>포트폴리오는 내용이 중요할 것 같아서 다시 리모델링</Explain>
          <Explain>두번째 포트폴리오에서 포트폴리오에 필요한 내용들 위주로 변경</Explain>
        </Styled.ExperienceCardExplainContainer>
        <Styled.SkillContainer>
          <Styled.SkillItem>React</Styled.SkillItem>
          <Styled.SkillItem>TypeScript</Styled.SkillItem>
        </Styled.SkillContainer>
      </Styled.ExperienceCardTopContainer>
    </Styled.ExperienceCard>
  );
};

export default Portfolio;
