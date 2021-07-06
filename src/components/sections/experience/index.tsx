import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2d3748;
  color: #edf2f7;
  scroll-snap-align: start;
`;

const Experience = () => {
  const { setExperienceOffsetTop }: any = useLayoutContext(); // eslint-disable-line 
  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const containerOffsetTop = containerRef.current.offsetTop;
    console.log('setExperienceOffsetTop:', containerOffsetTop); // eslint-disable-line
    setExperienceOffsetTop(containerOffsetTop);
  }, [setExperienceOffsetTop]);

  return <Container ref={containerRef}>Experience</Container>;
};

export default Experience;
