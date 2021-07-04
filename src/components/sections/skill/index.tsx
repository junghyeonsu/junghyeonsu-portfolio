import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #edf2f7;
  color: #4a5568;
  scroll-snap-align: start;
`;

const Skill = () => {
  const { setSkillOffsetTop }: any = useLayoutContext(); // eslint-disable-line 
  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const containerOffsetTop = containerRef.current.offsetTop;
    console.log('setSkillOffsetTop:', containerOffsetTop); // eslint-disable-line
    setSkillOffsetTop(containerOffsetTop);
  }, [setSkillOffsetTop]);

  return <Container ref={containerRef}>Skill</Container>;
};

export default Skill;
