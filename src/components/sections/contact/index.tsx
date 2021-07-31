import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
import { WHITE_BACKGROUND_COLOR, BLACK_TEXT_COLOR } from '#/colors';

import {
  FadeOutHeaderText,
  FadeInLeftTopText,
  Underline,
} from '#/components/common/gsap';

const Container = styled.article`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${WHITE_BACKGROUND_COLOR};
  color: ${BLACK_TEXT_COLOR};
`;

const Contact = () => {
  const { setContactOffsetTop }: any = useLayoutContext(); // eslint-disable-line 
  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const containerOffsetTop = containerRef.current.offsetTop;
    console.log('setContactOffsetTop:', containerOffsetTop); // eslint-disable-line
    setContactOffsetTop(containerOffsetTop);
  }, [setContactOffsetTop]);

  return (
    <Container ref={containerRef}>
      <FadeOutHeaderText delay={1}>Contact</FadeOutHeaderText>
      <FadeInLeftTopText delay={2.5}>
        <Underline delay={3.5}>Contact</Underline>
      </FadeInLeftTopText>
    </Container>
  );
};

export default Contact;
