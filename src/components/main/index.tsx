import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const Container = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  color: ${({ theme }) => theme.color.main};
`;

const Main = () => {
  const myHeader = useRef(null);

  useEffect(() => {
    gsap.to(myHeader.current, {
      opacity: 0,
      duration: 2,
    });
  }, []);

  return <Container ref={myHeader}>Hyeonsu Jung</Container>;
};

export default Main;
