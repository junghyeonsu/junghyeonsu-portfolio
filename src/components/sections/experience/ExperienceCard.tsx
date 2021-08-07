import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

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
`;

const ExperienceCard = ({ index }: CardProps) => {
  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        toggleActions: 'restart reverse restart restart',
      },
      opacity: 0,
      delay: 1.5,
      duration: 1.5,
      ease: 'power3.out',
    });
  }, [index]);

  return (
    <Container ref={containerRef}>
      {index}
      카드
    </Container>
  );
};

export default ExperienceCard;
