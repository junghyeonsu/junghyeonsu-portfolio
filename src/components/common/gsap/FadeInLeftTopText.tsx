import React, { useRef, useEffect, ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { BOLD_TEXT } from '#/constants';

interface TextProps {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
  delay: number;
}

const TextContainer = styled.p`
  position: absolute;
  top: 1%;
  left: 5%;
  font-family: ${BOLD_TEXT};
  font-size: 3.4vw;
`;

const FadeInLeftTopText = ({ children, delay }: TextProps) => {
  const target = useRef(null);
  useEffect(() => {
    gsap.from(target.current, {
      scrollTrigger: {
        trigger: target.current,
        toggleActions: 'restart reverse restart restart',
      },
      top: '-20px',
      opacity: 0,
      delay,
      duration: 1.5,
      ease: 'power3.out',
    });
  }, [delay]);
  return <TextContainer ref={target}>{children}</TextContainer>;
};

export default FadeInLeftTopText;
