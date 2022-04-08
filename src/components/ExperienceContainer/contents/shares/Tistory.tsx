import React from 'react';
import * as Styled from '../../styled';
import { Explain, InlineLinkText } from '../../common';

const Tistory = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>블로그</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="티스토리">
        <InlineLinkText href="https://junghyeonsu.tistory.com/">티스토리</InlineLinkText>
      </Styled.ExperienceCardTitle>

      <Styled.ExperienceCardExplainContainer>
        <Explain>알고리즘, CS지식 공부 내용, 회고록 등등 정리</Explain>
        <Explain>2022년 3월 기준 일 평균 150명, 월 평균 4000명 방문</Explain>
        <Explain>2022년 3월 기준 총 방문자 31,000명</Explain>
      </Styled.ExperienceCardExplainContainer>
    </Styled.ExperienceCard>
  );
};

export default Tistory;
