import React from 'react';
import * as Styled from '../../styled';
import { Explain, InlineLinkText } from '../../common';

const Velog = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTopContainer>
        <Styled.ExperienceCardTitleType>블로그</Styled.ExperienceCardTitleType>
        <Styled.ExperienceCardTitle>
          📝 <InlineLinkText href="https://velog.io/@junghyeonsu">벨로그</InlineLinkText>
        </Styled.ExperienceCardTitle>

        <Styled.ExperienceCardExplainContainer>
          <Explain>프로젝트 후기, 인터뷰 같은 내용들을 기록</Explain>
          <Explain>
            <InlineLinkText href="https://velog.io/@junghyeonsu/%EB%82%98%EB%A7%8C%EC%9D%98-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%A0%9C%EC%9E%91%EA%B8%B0">
              주간 1위 첫 번째 달성: 포트폴리오 개발
            </InlineLinkText>
          </Explain>
          <Explain>
            <InlineLinkText href="https://velog.io/@junghyeonsu/React-Numble-Challenge-%EB%8B%A4%EB%A5%B8-%EC%83%89%EA%B9%94-%EC%B0%BE%EA%B8%B0-%EA%B2%8C%EC%9E%84-%EB%A7%8C%EB%93%A4%EA%B8%B0">
              주간 1위 두 번째 달성: Numble 챌린지 후기
            </InlineLinkText>
          </Explain>
        </Styled.ExperienceCardExplainContainer>
      </Styled.ExperienceCardTopContainer>
    </Styled.ExperienceCard>
  );
};

export default Velog;
