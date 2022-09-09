import React from 'react';

import { Explain, InlineLinkText } from '../../common';
import * as Styled from '../../styled';

const FastCampus = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>컨텐츠 제공</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="패스트캠퍼스">패스트캠퍼스 컨텐츠 제공</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardExplainContainer>
        <Explain>
          <InlineLinkText href="https://fastcampus.co.kr/media_branding_portfolio">개발자 포트폴리오 그런 포트폴리오로 괜찮은가</InlineLinkText>
        </Explain>
      </Styled.ExperienceCardExplainContainer>
    </Styled.ExperienceCard>
  );
};

export default FastCampus;
