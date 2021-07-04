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

const Contact = () => {
  const { setContactOffsetTop }: any = useLayoutContext(); // eslint-disable-line 
  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const containerOffsetTop = containerRef.current.offsetTop;
    console.log('setContactOffsetTop:', containerOffsetTop); // eslint-disable-line
    setContactOffsetTop(containerOffsetTop);
  }, [setContactOffsetTop]);

  return <Container ref={containerRef}>Contact</Container>;
};

export default Contact;
