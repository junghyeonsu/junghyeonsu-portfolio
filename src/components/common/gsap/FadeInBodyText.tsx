import React, { useRef, useEffect, ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { REGULAR_TEXT } from '#/constants';

interface TextProps {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
  delay: number;
}

const BodyTextContainer = styled.p`
  position: relative;
  font-family: ${REGULAR_TEXT};
  font-size: 2.5vw;
  line-height: 0.5vw;
  z-index: 5;
`;

const FadeInBodyText = ({ children, delay }: TextProps) => {
  const target = useRef(null);
  useEffect(() => {
    gsap.from(target.current, {
      scrollTrigger: {
        trigger: target.current,
        toggleActions: 'restart reset restart reset',
      },
      top: '-15%',
      opacity: 0,
      delay,
      duration: 1.5,
      ease: 'power3.out',
    });
  }, [delay]);
  return <BodyTextContainer ref={target}>{children}</BodyTextContainer>;
};

export default FadeInBodyText;
