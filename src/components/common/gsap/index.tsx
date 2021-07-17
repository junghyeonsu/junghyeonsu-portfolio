import React, { useRef, useEffect, ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { BOLD_TEXT, REGULAR_TEXT } from '#/constants';

interface TextProps {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
  delay: number;
}

const HeaderTextContainer = styled.p`
  position: relative;
  font-family: ${BOLD_TEXT};
  font-size: 5vw;
  letter-spacing: 2px;
  line-height: 2vw;
`;

const BodyTextContainer = styled.p`
  position: relative;
  font-family: ${REGULAR_TEXT};
  font-size: 2vw;
  line-height: 0.5vw;
`;

const HeaderText = ({ children, delay }: TextProps) => {
  const myHeader = useRef(null);
  useEffect(() => {
    gsap.from(myHeader.current, {
      scrollTrigger: {
        trigger: myHeader.current,
        toggleActions: 'restart reverse restart restart',
      },
      top: '-15%',
      opacity: 0,
      delay,
      duration: 2,
      ease: 'power3.out',
    });
  }, [delay]);
  return <HeaderTextContainer ref={myHeader}>{children}</HeaderTextContainer>;
};

const BodyText = ({ children, delay }: TextProps) => {
  const myHeader = useRef(null);
  useEffect(() => {
    gsap.from(myHeader.current, {
      scrollTrigger: {
        trigger: myHeader.current,
        toggleActions: 'restart reverse restart restart',
      },
      top: '-15%',
      opacity: 0,
      delay,
      duration: 1.5,
      ease: 'power3.out',
    });
  }, [delay]);
  return <BodyTextContainer ref={myHeader}>{children}</BodyTextContainer>;
};

export { HeaderText, BodyText };
