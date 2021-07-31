import React, { useRef, useEffect, ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { REGULAR_TEXT } from '#/constants';

interface TextProps {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
  delay: number;
}

const TextContainer = styled.div`
  position: relative;
  font-family: ${REGULAR_TEXT};
  font-size: 3vw;
  line-height: 0.5vw;
`;

const BounceFadeInText = ({ children, delay }: TextProps) => {
  const target = useRef(null);
  useEffect(() => {
    gsap.from(target.current, {
      scrollTrigger: {
        trigger: target.current,
        toggleActions: 'restart reverse restart restart',
      },
      transform: 'scale(0.1)',
      opacity: 0,
      delay,
      duration: 1,
      ease: 'Bounce.easeOut',
    });
  }, [delay]);
  return <TextContainer ref={target}>{children}</TextContainer>;
};

export default BounceFadeInText;
