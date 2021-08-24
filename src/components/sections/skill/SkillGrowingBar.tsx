import React from 'react';
import styled from 'styled-components';

const ROOT_WIDTH = 49;

interface SkillBarProps {
  barGuage: number;
}

interface GrowBarProps {
  barGuage: number;
}

const GrowBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  border-radius: 5px;
  width: ${(props: GrowBarProps) => (ROOT_WIDTH / 100) * props.barGuage}vw;
  background-color: #ffd82a;
  transition: width 3s ease;
`;

// usage: 바 디자인을 위한 컴포넌트
// barGuage: 0이었다가 시간이 지나면 exp만큼 늘어남 (SkillItem이 부모)
const SkillBar = ({ barGuage }: SkillBarProps) => {
  return <GrowBar barGuage={barGuage} />;
};

export default SkillBar;
