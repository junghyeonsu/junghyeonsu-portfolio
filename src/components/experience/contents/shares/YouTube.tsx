import React from 'react';
import * as Styled from '../../styled';
import { Explain, InlineLinkText } from '../../common';

const YouTube = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTopContainer>
        <Styled.ExperienceCardTitleType>유튜브</Styled.ExperienceCardTitleType>
        <Styled.ExperienceCardTitle id="유튜브">
          <InlineLinkText href="https://www.youtube.com/channel/UCkC6sYPPSvpnRprmp2GcXZw">유튜브</InlineLinkText>
        </Styled.ExperienceCardTitle>

        <Styled.ExperienceCardExplainContainer>
          <Explain>간단히 내가 아는 내용을 전하고자 영상 제작 후 공유</Explain>
        </Styled.ExperienceCardExplainContainer>
      </Styled.ExperienceCardTopContainer>
    </Styled.ExperienceCard>
  );
};

export default YouTube;
