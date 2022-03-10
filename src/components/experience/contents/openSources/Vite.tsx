import React from 'react';
import * as Styled from '../../styled';
import { Explain, InlineLinkText, MergedWithLink } from '../../common';

const Vite = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTopContainer>
        <Styled.ExperienceCardTitleType>오타 수정</Styled.ExperienceCardTitleType>
        <Styled.ExperienceCardTitle id="vite-docs">
          <Styled.SkillIcon src="/icons/Vite.png" alt="Vite Docs" />
          Vite Docs
        </Styled.ExperienceCardTitle>

        <Styled.ExperienceCardExplainContainer>
          <MergedWithLink href="https://github.com/vitejs-kr/vitejs-kr.github.io/pull/180" date="2022/2/23" merged />
          <Explain>
            <InlineLinkText href="https://vitejs-kr.github.io/guide/features.html#typescript-compiler-options">
              Vite 공식 문서 (타입스크립트 컴파일러 옵션) 페이지
            </InlineLinkText>{' '}
            오타 수정
          </Explain>
        </Styled.ExperienceCardExplainContainer>
      </Styled.ExperienceCardTopContainer>
    </Styled.ExperienceCard>
  );
};

export default Vite;
