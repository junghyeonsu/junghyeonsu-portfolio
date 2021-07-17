import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
import { BLACK_BACKGROUND_COLOR, WHITE_TEXT_COLOR } from '#/colors';

import { HeaderText } from '#/components/common/gsap';

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${BLACK_BACKGROUND_COLOR};
  color: ${WHITE_TEXT_COLOR};
`;

const Experience = () => {
  const { setExperienceOffsetTop }: any = useLayoutContext(); // eslint-disable-line 
  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const containerOffsetTop = containerRef.current.offsetTop;
    console.log('setExperienceOffsetTop:', containerOffsetTop); // eslint-disable-line
    setExperienceOffsetTop(containerOffsetTop);
  }, [setExperienceOffsetTop]);

  return (
    <Container ref={containerRef}>
      <HeaderText delay={1}>Experience</HeaderText>
    </Container>
  );
};

export default Experience;
