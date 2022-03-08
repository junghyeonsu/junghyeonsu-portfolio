import React from 'react';
import * as Styled from '../../styled';
import { Explain, Link, InlineLinkText } from '../../common';

const SatrecI = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTopContainer>
        <Styled.ExperienceCardTitleType>인턴</Styled.ExperienceCardTitleType>
        <Styled.ExperienceCardTitle>
          <InlineLinkText href="https://www.satreci.com/korean">쎄트렉아이</InlineLinkText>
        </Styled.ExperienceCardTitle>
        <Styled.ExperienceCardPeriod>2020년 7월 - 2020년 8월</Styled.ExperienceCardPeriod>

        <Styled.ExperienceCardExplainContainer>
          <Explain>약 두 달간 회사에 DevOps를 적용하기 전에 DevOps를 먼저 사용해보고 발표하는 인턴 진행</Explain>
          <Explain>Ansible을 이용해 Kubernetes 환경 구축 및 고가용성 유지를 위한 테스트</Explain>
        </Styled.ExperienceCardExplainContainer>

        <Styled.HyperLinkContainer>
          <Link href="https://junghyeonsu.tistory.com/60?category=797646">인턴 중 올린 포스트 모음</Link>
        </Styled.HyperLinkContainer>
      </Styled.ExperienceCardTopContainer>
    </Styled.ExperienceCard>
  );
};

export default SatrecI;
