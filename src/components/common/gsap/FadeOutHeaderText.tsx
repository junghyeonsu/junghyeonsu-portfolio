import React, { useRef, useEffect, ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { BOLD_TEXT } from '#/constants';

interface TextProps {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
  delay: number;
  color?: string;
}

const HeaderTextContainer = styled.p`
  position: absolute;
  top: 30%;
  font-family: ${BOLD_TEXT};
  font-size: 7vw;
  letter-spacing: 2px;
  line-height: 2vw;
  z-index: 5;

  @media ${props => props.theme.mobile} {
    top: 40%;
    font-size: 13vw;
  }
`;

const FadeOutHeaderText = ({ children, delay, color }: TextProps) => {
  const target = useRef(null);
  useEffect(() => {
    gsap.to(target.current, {
      scrollTrigger: {
        trigger: target.current,
        toggleActions: 'restart reset restart reset',
      },
      top: '20%',
      opacity: 0,
      delay,
      duration: 1.2,
      ease: 'power3.out',
    });
  }, [delay]);
  return (
    <HeaderTextContainer ref={target}>
      <span style={{ color }}>{children}</span>
    </HeaderTextContainer>
  );
};

export default FadeOutHeaderText;
