import React from 'react';
import styled from 'styled-components';
import { SKILL_ARTICLE_AREA, BOLD_TEXT } from '#/constants';

import Counter from '#/components/common/counter';

const ROOT_WIDTH = 44;
const ROOT_HEIGHT = 3.5;
const ROOT_HEIGHT_WITH_VW = `${ROOT_HEIGHT}vw`;

interface SkillBarProps {
  barGuage: number;
  delay: number;
}

interface GrowBarProps {
  barGuage: number;
}

const GrowBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  perspective: 1000px;
  perspective-origin: 50% 50%;
  backface-visibility: visible;
  transform-style: preserve-3d;
`;

const Bottom = styled.div`
  background-color: rgba(247, 243, 21, 0.5);
  transform: rotateX(60deg) rotateY(0deg);
  width: ${(props: GrowBarProps) => (ROOT_WIDTH / 100) * props.barGuage}vw;
  height: ${ROOT_HEIGHT_WITH_VW};
  transition: width 3s ease;
`;

const Right = styled.div`
  background-color: rgba(247, 243, 21, 0.9);
  position: absolute;
  right: 0;
  transform: rotateX(330deg) rotateY(-90deg) translateX(${ROOT_HEIGHT - 5}vw)
    translateY(${ROOT_HEIGHT - 8.4}vw) translateZ(${ROOT_HEIGHT - 5.2}vw);
  width: ${ROOT_HEIGHT_WITH_VW};
  height: ${ROOT_HEIGHT_WITH_VW};
  box-shadow: 1vw -0.5vw 3vw rgba(247, 243, 21, 0.5);
`;

const Back = styled.div`
  position: absolute;
  background-color: rgba(247, 243, 21, 1);
  transform: rotateX(330deg) rotateY(0deg) translateX(0vw)
    translateY(${ROOT_HEIGHT - 8.4}vw) translateZ(${ROOT_HEIGHT - 6.7}vw);
  width: ${(props: GrowBarProps) => (ROOT_WIDTH / 100) * props.barGuage}vw;
  height: ${ROOT_HEIGHT_WITH_VW};
  transition: width 3s ease;
`;

const Top = styled.div`
  position: absolute;
  background-color: rgba(247, 243, 21, 0.7);
  transform: rotateX(60deg) rotateY(0deg) translateX(-0.3vw)
    translateY(${ROOT_HEIGHT - 5.5}vw) translateZ(${ROOT_HEIGHT + 2.9}vw);
  width: ${(props: GrowBarProps) => (ROOT_WIDTH / 100) * props.barGuage}vw;

  height: ${ROOT_HEIGHT_WITH_VW};
  transition: width 3s ease;
`;

const Front = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${BOLD_TEXT};
  font-size: 1.5vw;
  position: absolute;
  background-color: rgba(247, 243, 21, 0.7);
  transform: rotateX(330deg) rotateY(0deg) translateX(-0.3vw)
    translateY(-${ROOT_HEIGHT + 1.4}vw) translateZ(${ROOT_HEIGHT - 3.3}vw);
  width: ${(props: GrowBarProps) => (ROOT_WIDTH / 100) * props.barGuage}vw;
  height: ${ROOT_HEIGHT_WITH_VW};
  transition: width 3s ease;
`;

// usage: 바 디자인을 위한 컴포넌트
// barGuage: 0이었다가 시간이 지나면 exp만큼 늘어남 (SkillItem이 부모)
const SkillBar = ({ barGuage, delay }: SkillBarProps) => {
  return (
    <GrowBar>
      <Bottom barGuage={barGuage} />
      <Right />
      <Back barGuage={barGuage} />
      <Front barGuage={barGuage}>
        <Counter
          number={barGuage}
          delay={delay + 1}
          trigger={SKILL_ARTICLE_AREA}
        />
      </Front>
      <Top barGuage={barGuage} />
    </GrowBar>
  );
};

export default SkillBar;
