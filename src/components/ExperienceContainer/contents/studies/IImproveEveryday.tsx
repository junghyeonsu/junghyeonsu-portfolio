import React from 'react';

import { Explain, Links } from '../../common';
import * as Styled from '../../styled';

const LINKS = [
  {
    text: '공부한 내용 올리는 레파지토리',
    href: 'https://github.com/junghyeonsu/I-improve-every-day',
  },
];

const IImproveEveryday = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>개인 공부</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="나는-매일-성장한다">나는 매일 성장한다</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2022년 5월 28일 - 진행중</Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardExplainContainer>
        <Explain>매일 성장하기 위해서 모르는 것을 최소한 하나씩 정리하는 레파지토리</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
    </Styled.ExperienceCard>
  );
};

export default IImproveEveryday;
