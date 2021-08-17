import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { FadeInContent } from '#/components/common/gsap';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: firebrick;
`;

const Component = () => {
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
  }, []);

  return (
    <FadeInContent delay={2.5}>
      <Container>HayanMind</Container>
    </FadeInContent>
  );
};

export default Component;
