import React from 'react';
import * as Styled from '../../styled';
import { Explain } from '../../common';

const ReactContribute = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTopContainer>
        <Styled.ExperienceCardTitleType>대학교</Styled.ExperienceCardTitleType>
        <Styled.ExperienceCardTitle id="충남대학교">충남대학교</Styled.ExperienceCardTitle>
        <Styled.ExperienceCardExplainContainer>
          <Explain>2016년 - 2022년 컴퓨터공학과 학사 졸업</Explain>
          <Explain>학점 3.65 / 4.5</Explain>
        </Styled.ExperienceCardExplainContainer>
      </Styled.ExperienceCardTopContainer>
    </Styled.ExperienceCard>
  );
};

export default ReactContribute;
