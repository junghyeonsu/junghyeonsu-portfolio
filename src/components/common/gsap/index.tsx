import React, { useRef, useEffect, ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { BOLD_TEXT, REGULAR_TEXT } from '#/constants';
import Underline from '#/components/common/gsap/Underline';

interface TextProps {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
  delay: number;
}

interface UnderlineProps {
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

const UnderlineContainer = styled.span`
  background-image: linear-gradient(transparent 80%, #f8cd07 20%);
  background-size: 0% 100%;
  background-repeat: no-repeat;
  line-height: 0%;
`;

const HeaderText = ({ children, delay }: TextProps) => {
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

const BodyText = ({ children, delay }: TextProps) => {
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
      duration: 1.5,
      ease: 'power3.out',
    });
  }, [delay]);
  return <BodyTextContainer ref={target}>{children}</BodyTextContainer>;
};

// const Underline = ({ delay, children }: UnderlineProps) => {
//   const target = useRef(null);
//   useEffect(() => {
//     gsap.to(target.current, {
//       scrollTrigger: {
//         trigger: target.current,
//         toggleActions: 'restart reverse restart restart',
//       },
//       backgroundImage: 'linear-gradient(transparent 80%, #F8CD07 20%)',
//       backgroundSize: '100% 100%',
//       delay,
//       duration: 0.6,
//       ease: 'expo.out',
//     });
//   }, [delay]);
//   return <UnderlineContainer ref={target}>{children}</UnderlineContainer>;
// };

export { HeaderText, BodyText, Underline };
