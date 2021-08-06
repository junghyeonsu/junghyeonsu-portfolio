import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface CardProps {
  index: number;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  /* background-color: rgba(0, 0, 0, 0.25); */
  backdrop-filter: blur(20px);
  border: 2px solid transparent;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  animation: 1s linear fadeIn;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const ExperienceCard = ({ index }: CardProps) => {
  const containerRef = useRef<any>(null); // eslint-disable-line
  useEffect(() => {
    console.log(index, containerRef.current.offsetLeft);
  });
  return <Container ref={containerRef}>{index} 카드</Container>;
};

export default ExperienceCard;
