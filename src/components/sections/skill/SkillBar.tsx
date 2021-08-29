import React from 'react';
import styled from 'styled-components';
import Counter from '#/components/common/counter';

import { SKILL_ARTICLE_AREA } from '#/constants';

interface SkillBarProps {
  barGuage: number;
  delay: number;
}

const FullBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 25px;
  border-radius: 5px;
  background-color: #ffffff;

  @media ${props => props.theme.mobile} {
    height: 20px;
  }
`;

const CounterBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 0;
  font-size: 0.8vw;
  margin-right: 5px;
  z-index: 5;

  @media ${props => props.theme.mobile} {
    font-size: 2vw;
  }
`;

// usage: 바 디자인을 위한 컴포넌트
// barGuage: 0이었다가 시간이 지나면 exp만큼 늘어남 (SkillItem이 부모)
const SkillBar = ({ barGuage, delay }: SkillBarProps) => {
  return (
    <FullBar>
      <CounterBox>
        <Counter
          number={barGuage}
          delay={delay + 0.5}
          trigger={SKILL_ARTICLE_AREA}
        />
        %
      </CounterBox>
    </FullBar>
  );
};

export default SkillBar;
