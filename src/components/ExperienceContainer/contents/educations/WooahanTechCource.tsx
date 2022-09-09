import React from 'react';

import { Explain, InlineLinkText } from '../../common';
import * as Styled from '../../styled';

const WooahanTechCource = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>교육</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="우아한테크코스-4기">우아한테크코스 4기</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardExplainContainer>
        <Explain>서류 합격 후 2021/11/24 - 2021/12/18 프리코스 진행</Explain>
        <Explain>
          <InlineLinkText href="https://junghyeonsu.tistory.com/category/%EC%9A%B0%ED%85%8C%EC%BD%94%204%EA%B8%B0">
            진행했던 내용들을 과제 마다 정리
          </InlineLinkText>
        </Explain>
        <Explain>최종에서 아쉽게 불합격</Explain>
      </Styled.ExperienceCardExplainContainer>
    </Styled.ExperienceCard>
  );
};

export default WooahanTechCource;
