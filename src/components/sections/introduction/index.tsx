import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2d3748;
  color: #edf2f7;
  scroll-snap-align: start;
`;

const Introduction = () => {
  const { setIntroductionOffsetTop }: any = useLayoutContext(); // eslint-disable-line 
  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const containerOffsetTop = containerRef.current.offsetTop;
    console.log('setIntroductionOffsetTop:', containerOffsetTop); // eslint-disable-line
    setIntroductionOffsetTop(containerOffsetTop);
  }, [setIntroductionOffsetTop]);

  return (
    <Container ref={containerRef}>
      <p>Introduction</p>
    </Container>
  );
};

export default Introduction;
