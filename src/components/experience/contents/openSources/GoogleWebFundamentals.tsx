import React from 'react';
import * as Styled from '../../styled';
import { Explain, InlineLinkText, MergedWithLink } from '../../common';

const ReactContribute = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTopContainer>
        <Styled.ExperienceCardTitleType>오타 수정</Styled.ExperienceCardTitleType>
        <Styled.ExperienceCardTitle>
          <Styled.SkillIcon src="/icons/Google.png" alt="Google" />
          Google
        </Styled.ExperienceCardTitle>

        <Styled.ExperienceCardExplainContainer>
          <Explain>
            <InlineLinkText href="https://developers.google.com/web/updates/2019/02/rendering-on-the-web?hl=ko">
              구글 개발자 문서 (웹 렌더링)
            </InlineLinkText>{' '}
            오타 수정
          </Explain>
          <MergedWithLink href="https://github.com/google/WebFundamentals/pull/9483" date="2022/1/14" merged={false} />
        </Styled.ExperienceCardExplainContainer>
      </Styled.ExperienceCardTopContainer>
    </Styled.ExperienceCard>
  );
};

export default ReactContribute;
