import React from 'react';
import * as Styled from '../../styled';
import { Explain, InlineLinkText, MergedWithLink } from '../../common';

const ReactContribute = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTopContainer>
        <Styled.ExperienceCardTitleType>번역</Styled.ExperienceCardTitleType>
        <Styled.ExperienceCardTitle>
          <Styled.SkillIcon src="/icons/React.png" alt="React" />
          <InlineLinkText href="https://ko.reactjs.org/">React</InlineLinkText>
        </Styled.ExperienceCardTitle>

        <Styled.ExperienceCardExplainContainer>
          <Explain>리액트 공식문서 간단한 페이지 번역</Explain>
          <MergedWithLink href="https://github.com/reactjs/ko.reactjs.org/pull/268" date="2020/12/08" merged />
        </Styled.ExperienceCardExplainContainer>
      </Styled.ExperienceCardTopContainer>
    </Styled.ExperienceCard>
  );
};

export default ReactContribute;
