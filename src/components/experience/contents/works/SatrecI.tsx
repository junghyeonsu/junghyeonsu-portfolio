import React from 'react';
import * as Styled from '../../styled';
import { Explain, Links, InlineLinkText } from '../../common';

const LINKS = [
  {
    href: 'https://junghyeonsu.tistory.com/60?category=797646',
    text: '인턴 중 올린 포스트 모음',
  },
];

const SatrecI = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>인턴</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="쎄트렉아이">
        <InlineLinkText href="https://www.satreci.com/korean">쎄트렉아이</InlineLinkText>
      </Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2020년 7월 - 2020년 8월</Styled.ExperienceCardPeriod>

      <Styled.ExperienceCardExplainContainer>
        <Explain>약 두 달간 회사에 DevOps를 적용하기 전에 DevOps를 먼저 사용해보고 발표하는 인턴 진행</Explain>
        <Explain>Ansible을 이용해 Kubernetes 환경 구축 및 고가용성 유지를 위한 테스트</Explain>
      </Styled.ExperienceCardExplainContainer>

      <Links links={LINKS} />
    </Styled.ExperienceCard>
  );
};

export default SatrecI;
