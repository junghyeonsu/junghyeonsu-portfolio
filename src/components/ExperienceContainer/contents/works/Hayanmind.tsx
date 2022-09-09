import React from 'react';

import { Explain, InlineLinkText, Links } from '../../common';
import * as Styled from '../../styled';

const LINKS = [
  {
    href: 'https://redkiwiapp.com/ko/b2b',
    text: 'B2B 프로그램 소개 페이지',
  },
  {
    href: 'https://velog.io/@junghyeonsu/회고록-5월-및-인턴-회고',
    text: '인턴 회고록 블로그 포스트 (어려웠던 점, 느낀 점 등등 정리)',
  },
];

const Hayanmind = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>인턴</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="하얀마인드">
        <InlineLinkText href="https://hayanmind.com/ko-KR/">하얀마인드</InlineLinkText>
      </Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2021년 3월 - 2021년 6월, 2021년 9월 - 2021년 12월 (약 8개월)</Styled.ExperienceCardPeriod>

      <Styled.ExperienceCardExplainContainer>
        <Explain>영어 쉐도잉 애플리케이션 제작 스타트업의 프론트엔드 개발자로 참여</Explain>
        <Explain>B2B 소개 페이지 제작 프로젝트 참여 (디자이너1, 개발자1)</Explain>
        <Explain>B2B 소개 페이지 반응형 디자인 적용</Explain>
        <Explain>
          B2B 소개 페이지{' '}
          <InlineLinkText href="https://velog.io/@junghyeonsu/React-useForm">
            custom form hook을 통해 form 데이터 관리(validation 처리 등)
          </InlineLinkText>
        </Explain>
        <Explain>react-admin 프레임워크를 활용한 B2B 사이트 유지보수(firestore를 이용한 CRUD 구현)</Explain>
      </Styled.ExperienceCardExplainContainer>

      <Links links={LINKS} />
    </Styled.ExperienceCard>
  );
};

export default Hayanmind;
