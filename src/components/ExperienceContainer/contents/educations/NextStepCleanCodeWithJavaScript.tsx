import React from 'react';
import * as Styled from '../../styled';
import { Explain, SecondIndentExplain, InlineLinkText } from '../../common';

const NextStepCleanCodeWithJavaScript = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>교육</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="next-step-javascript-clean-code">Clean Code with JavaScript 2기</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2022/3/8 - 2022/4/26</Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardExplainContainer>
        <Explain>
          <InlineLinkText href="https://edu.nextstep.camp/">NEXTSTEP</InlineLinkText>에서 주최
        </Explain>

        <Explain>온보딩 미션 진행 (2022/3/8 - 2022/3/15)</Explain>
        <SecondIndentExplain>
          <InlineLinkText href="https://github.com/next-step/js-calculator/pull/97">온보딩 미션 PR</InlineLinkText>
        </SecondIndentExplain>

        <Explain>1단계 로또 미션 진행 (2022/3/15 - 2022/3/29)</Explain>
        <SecondIndentExplain>
          <InlineLinkText href="https://github.com/next-step/js-lotto/pull/77">STEP1 PR</InlineLinkText>
        </SecondIndentExplain>
        <SecondIndentExplain>
          <InlineLinkText href="https://github.com/next-step/js-lotto/pull/100">STEP2 PR</InlineLinkText>
        </SecondIndentExplain>

        <Explain>2단계 자동차 경주 미션 진행 (2022/3/29 - 2022/4/12)</Explain>
        <SecondIndentExplain>
          <InlineLinkText href="https://github.com/next-step/js-racingcar/pull/68">STEP1 PR</InlineLinkText>
        </SecondIndentExplain>
        <SecondIndentExplain>
          <InlineLinkText href="https://github.com/next-step/js-racingcar/pull/76">STEP2 PR</InlineLinkText>
        </SecondIndentExplain>

        <Explain>3단계 자판기 미션 진행 (2022/4/12 - 2022/4/26)</Explain>
        <SecondIndentExplain>
          <InlineLinkText href="https://github.com/next-step/js-vending-machine/pull/32">STEP1 PR</InlineLinkText>
        </SecondIndentExplain>
        <SecondIndentExplain>
          <InlineLinkText href="https://github.com/next-step/js-vending-machine/pull/36">STEP2 PR</InlineLinkText>
        </SecondIndentExplain>

        <Explain>
          <InlineLinkText href="https://junghyeonsu-dev.vercel.app/posts/NextStep-clean-code-with-javascript-2th">
            교육 종료 후 느낀 점, 배운 점, 아쉬웠던 점 기록한 회고 글 작성
          </InlineLinkText>
        </Explain>
      </Styled.ExperienceCardExplainContainer>
    </Styled.ExperienceCard>
  );
};

export default NextStepCleanCodeWithJavaScript;
