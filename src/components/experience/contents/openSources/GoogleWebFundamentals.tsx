import React from 'react';
import * as Styled from '../../styled';
import { Explain, InlineLinkText, MergedWithLink } from '../../common';

const ReactContribute = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>오타 수정</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="google-developers">
        <Styled.SkillIcon src="/icons/Google.png" alt="Google Web Docs" />
        Google Developers
      </Styled.ExperienceCardTitle>

      <Styled.ExperienceCardExplainContainer>
        <MergedWithLink href="https://github.com/google/WebFundamentals/pull/9483" date="2022/1/14" merged={false} />
        <Explain>
          <InlineLinkText href="https://developers.google.com/web/updates/2019/02/rendering-on-the-web?hl=ko">
            구글 개발자 문서 (웹 렌더링)
          </InlineLinkText>{' '}
          오타 수정
        </Explain>
      </Styled.ExperienceCardExplainContainer>
    </Styled.ExperienceCard>
  );
};

export default ReactContribute;
