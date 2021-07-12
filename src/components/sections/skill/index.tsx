import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
import { WHITE_BACKGROUND_COLOR, BLACK_TEXT_COLOR } from '#/colors';

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${WHITE_BACKGROUND_COLOR};
  color: ${BLACK_TEXT_COLOR};
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
