import React from 'react';

import { Explain, MergedWithLink } from '../../common';
import * as Styled from '../../styled';

const ReactContribute = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>번역</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="react-docs">
        <Styled.SkillIcon src="/icons/React.png" alt="React Docs" />
        React Docs
      </Styled.ExperienceCardTitle>

      <Styled.ExperienceCardExplainContainer>
        <MergedWithLink href="https://github.com/reactjs/ko.reactjs.org/pull/268" date="2020/12/08" merged />
        <Explain>리액트 공식문서 간단한 페이지 번역</Explain>
      </Styled.ExperienceCardExplainContainer>
    </Styled.ExperienceCard>
  );
};

export default ReactContribute;
