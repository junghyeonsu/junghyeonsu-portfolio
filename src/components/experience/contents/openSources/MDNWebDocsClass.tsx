import React from 'react';
import * as Styled from '../../styled';
import { Explain, InlineLinkText, MergedWithLink } from '../../common';

const MDNWebDocsClass = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTopContainer>
        <Styled.ExperienceCardTitleType>오타 수정</Styled.ExperienceCardTitleType>
        <Styled.ExperienceCardTitle id="MDN-web-docs">
          <Styled.SkillIcon src="/icons/MDNWebDocs.jpeg" alt="MDN Web Docs" />
          MDN Web Docs
        </Styled.ExperienceCardTitle>

        <Styled.ExperienceCardExplainContainer>
          <MergedWithLink href="https://github.com/mdn/translated-content/pull/4370" date="2022/03/09" merged />
          <Explain>
            <InlineLinkText href="https://pr4370.content.dev.mdn.mozit.cloud/ko/docs/Web/JavaScript/Reference/Classes">
              MDN 공식문서 Classes 페이지
            </InlineLinkText>{' '}
            간단 오타 수정
          </Explain>
        </Styled.ExperienceCardExplainContainer>
      </Styled.ExperienceCardTopContainer>
    </Styled.ExperienceCard>
  );
};

export default MDNWebDocsClass;
