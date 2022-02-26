import React from 'react';
import * as Styled from '../../styled';
import { Explain, Link } from '../../common';

const SatrecI = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTopContainer>
        <Styled.ExperienceCardTitleType>인턴</Styled.ExperienceCardTitleType>
        <Styled.ExperienceCardTitle>📌 쎄트렉아이 인턴</Styled.ExperienceCardTitle>
        <Styled.ExperienceCardPeriod>2020년 7월 - 2020년 8월</Styled.ExperienceCardPeriod>

        <Styled.ExperienceCardExplainContainer>
          <Explain>약 두 달간 회사의 데브옵스 적용을 위한 작업</Explain>
          <Explain>Ansible을 이용해 Kubernetes 환경 구축 및 고가용성 유지를 위한 테스트</Explain>
        </Styled.ExperienceCardExplainContainer>

        <Styled.HyperLinkContainer>
          <Link href="https://redkiwiapp.com/ko/b2b">B2B 프로그램 소개 페이지</Link>
          <Link href="https://velog.io/@junghyeonsu/회고록-5월-및-인턴-회고">
            인턴 회고록 블로그 포스트 (어려웠던 점, 느낀 점 등등 정리)
          </Link>
        </Styled.HyperLinkContainer>
      </Styled.ExperienceCardTopContainer>
    </Styled.ExperienceCard>
  );
};

export default SatrecI;
