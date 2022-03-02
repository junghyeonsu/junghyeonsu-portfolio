import React from 'react';
import * as Styled from '../../styled';
import { Explain, InlineLinkText, MergedWithLink } from '../../common';

const Kubernetes = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTopContainer>
        <Styled.ExperienceCardTitleType>번역</Styled.ExperienceCardTitleType>
        <Styled.ExperienceCardTitle>
          <Styled.SkillIcon src="/icons/kubernetes.png" alt="kubernetes" />
          Kubernetes
        </Styled.ExperienceCardTitle>

        <Styled.ExperienceCardExplainContainer>
          <MergedWithLink href="https://github.com/kubernetes/website/pull/23690" date="2020/07/11" merged />
          <Explain>
            인턴 진행하며 공부한{' '}
            <InlineLinkText href="https://v1-22.docs.kubernetes.io/ko/docs/reference/scheduling/policies/">
              쿠버네티스 스케줄링 정책 페이지
            </InlineLinkText>{' '}
            번역 (현재 deprecated)
          </Explain>
        </Styled.ExperienceCardExplainContainer>
      </Styled.ExperienceCardTopContainer>
    </Styled.ExperienceCard>
  );
};

export default Kubernetes;
