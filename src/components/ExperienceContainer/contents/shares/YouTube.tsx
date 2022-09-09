import React from 'react';

import { Explain, InlineLinkText } from '../../common';
import * as Styled from '../../styled';

const YouTube = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>유튜브</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="유튜브">
        <InlineLinkText href="https://www.youtube.com/channel/UCkC6sYPPSvpnRprmp2GcXZw">유튜브</InlineLinkText>
      </Styled.ExperienceCardTitle>

      <Styled.ExperienceCardExplainContainer>
        <Explain>간단히 내가 아는 내용을 전하고자 영상 제작 후 공유</Explain>
      </Styled.ExperienceCardExplainContainer>
    </Styled.ExperienceCard>
  );
};

export default YouTube;
