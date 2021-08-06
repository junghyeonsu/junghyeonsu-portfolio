import React, { useRef, useEffect, ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { BOLD_TEXT } from '#/constants';

interface TextProps {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
  delay: number;
}

const HeaderTextContainer = styled.p`
  position: relative;
  font-family: ${BOLD_TEXT};
  font-size: 7vw;
  letter-spacing: 2px;
  line-height: 2vw;
  z-index: 5;
`;

const FadeInHeaderText = ({ children, delay }: TextProps) => {
  const target = useRef(null);
  useEffect(() => {
    gsap.from(target.current, {
      scrollTrigger: {
        trigger: target.current,
        toggleActions: 'restart reverse restart restart',
      },
      top: '-15%',
      opacity: 0,
      delay,
      duration: 2,
      ease: 'power3.out',
    });
  }, [delay]);
  return <HeaderTextContainer ref={target}>{children}</HeaderTextContainer>;
};

export default FadeInHeaderText;
