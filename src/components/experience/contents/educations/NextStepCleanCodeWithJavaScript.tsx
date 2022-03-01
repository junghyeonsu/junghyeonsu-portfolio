import React from 'react';
import * as Styled from '../../styled';
import { Explain, InlineLinkText } from '../../common';

const NextStepCleanCodeWithJavaScript = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTopContainer>
        <Styled.ExperienceCardTitleType>교육</Styled.ExperienceCardTitleType>
        <Styled.ExperienceCardTitle>Clean Code with JavaScript 2기 (예정)</Styled.ExperienceCardTitle>
        <Styled.ExperienceCardExplainContainer>
          <Explain>
            <InlineLinkText href="https://edu.nextstep.camp/">NEXTSTEP</InlineLinkText>에서 주최
          </Explain>
          <Explain>2022/3/8 - 2022/4/26</Explain>
        </Styled.ExperienceCardExplainContainer>
      </Styled.ExperienceCardTopContainer>
    </Styled.ExperienceCard>
  );
};

export default NextStepCleanCodeWithJavaScript;
