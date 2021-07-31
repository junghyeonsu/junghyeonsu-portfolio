import React from 'react';
import styled from 'styled-components';

const ROOT_WIDTH = 44;
const ROOT_WIDTH_WITH_VW = `${ROOT_WIDTH}vw`;
const ROOT_HEIGHT = 3.5;
const ROOT_HEIGHT_WITH_VW = `${ROOT_HEIGHT}vw`;

const FullBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  perspective: 1000px;
  perspective-origin: 50% 50%;
  backface-visibility: visible;
  transform-style: preserve-3d;
  transition: all 3s ease;
`;

const Bottom = styled.div`
  background-color: rgba(197, 197, 197, 0.9);
  transform: rotateX(60deg) rotateY(0deg);
  width: ${ROOT_WIDTH_WITH_VW};
  height: ${ROOT_HEIGHT_WITH_VW};
  box-shadow: 0.1vw 0.1vw 1vw rgba(0, 0, 0, 0.3), 1vw 0vw 5vw rgba(0, 0, 0, 0.3),
    1vw 0vw 5vw #fefefe;
`;

const Left = styled.div`
  background-color: rgba(247, 243, 21, 1);
  position: absolute;
  left: 0;
  transform: rotateX(61deg) rotateY(-90deg) translateX(${ROOT_HEIGHT + 1.2}vw)
    translateY(${ROOT_HEIGHT - 5}vw) translateZ(${ROOT_HEIGHT - 1.7}vw);
  width: ${ROOT_HEIGHT_WITH_VW};
  height: ${ROOT_HEIGHT_WITH_VW};
  box-shadow: 0.1vw 0vw 1vw rgba(247, 243, 21, 1);
`;

const Right = styled.div`
  background-color: rgba(197, 197, 197, 0.8);
  position: absolute;
  right: 0;
  transform: rotateX(330deg) rotateY(-90deg) translateX(${ROOT_HEIGHT - 5}vw)
    translateY(${ROOT_HEIGHT - 8.5}vw) translateZ(${ROOT_HEIGHT - 5.2}vw);
  width: ${ROOT_HEIGHT_WITH_VW};
  height: ${ROOT_HEIGHT_WITH_VW};
`;

const Back = styled.div`
  position: absolute;
  background-color: rgba(197, 197, 197, 0.6);
  transform: rotateX(330deg) rotateY(0deg) translateX(0vw)
    translateY(${ROOT_HEIGHT - 8.4}vw) translateZ(${ROOT_HEIGHT - 6.7}vw);
  width: ${ROOT_WIDTH_WITH_VW};
  height: ${ROOT_HEIGHT_WITH_VW};
`;

const Front = styled.div`
  position: absolute;
  background-color: rgba(197, 197, 197, 0.4);
  transform: rotateX(330deg) rotateY(0deg) translateX(0vw)
    translateY(-${ROOT_HEIGHT + 1.4}vw) translateZ(${ROOT_HEIGHT - 3.4}vw);
  width: ${ROOT_WIDTH_WITH_VW};
  height: ${ROOT_HEIGHT_WITH_VW};
`;

// usage: 바 디자인을 위한 컴포넌트
// barGuage: 0이었다가 시간이 지나면 exp만큼 늘어남 (SkillItem이 부모)
const SkillBar = () => {
  return (
    <FullBar>
      <Bottom />
      <Left />
      <Right />
      <Back />
      <Front />
    </FullBar>
  );
};

export default SkillBar;
