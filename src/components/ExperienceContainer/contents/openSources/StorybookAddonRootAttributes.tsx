import React from 'react';

import { Explain, InlineLinkText } from '../../common';
import * as Styled from '../../styled';

const StorybookAddonRootAttributes = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>라이브러리 개발</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="storybook-addon-root-attributes">Storybook addon root attributes</Styled.ExperienceCardTitle>

      <Styled.ExperienceCardExplainContainer>
        <Explain>스토리북 Root Attirbute를 여러 개 변경하기 위한 애드온 라이브러리 개발</Explain>
        <Explain>
          <InlineLinkText href="https://github.com/junghyeonsu/storybook-addon-root-attributes">
            junghyeonsu / storybook-addon-root-attributes
          </InlineLinkText>
        </Explain>
      </Styled.ExperienceCardExplainContainer>
    </Styled.ExperienceCard>
  );
};

export default StorybookAddonRootAttributes;
