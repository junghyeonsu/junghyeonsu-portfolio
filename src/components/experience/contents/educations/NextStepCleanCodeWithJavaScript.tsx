import React from 'react';
import * as Styled from '../../styled';
import { Explain, SecondIndentExplain, InlineLinkText } from '../../common';

const NextStepCleanCodeWithJavaScript = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>교육</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="next-step-javascript-clean-code">Clean Code with JavaScript 2기 (진행중)</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2022/3/8 - 2022/4/26</Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardExplainContainer>
        <Explain>
          <InlineLinkText href="https://edu.nextstep.camp/">NEXTSTEP</InlineLinkText>에서 주최
        </Explain>
        <Explain>온보딩 미션 진행 (2022/3/8 - 2022/3/15)</Explain>
        <SecondIndentExplain>
          <InlineLinkText href="https://github.com/next-step/js-calculator/pull/97">온보딩 미션 PR</InlineLinkText>
        </SecondIndentExplain>
      </Styled.ExperienceCardExplainContainer>
    </Styled.ExperienceCard>
  );
};

export default NextStepCleanCodeWithJavaScript;
