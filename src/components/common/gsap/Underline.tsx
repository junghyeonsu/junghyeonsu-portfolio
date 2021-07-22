import React, { useRef, useEffect, ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

interface UnderlineProps {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
  delay: number;
}

const UnderlineContainer = styled.span`
  background-image: linear-gradient(transparent 80%, #f8cd07 20%);
  background-size: 0% 100%;
  background-repeat: no-repeat;
  line-height: 0%;
`;

const Underline = ({ delay, children }: UnderlineProps) => {
  const target = useRef(null);
  useEffect(() => {
    gsap.to(target.current, {
      scrollTrigger: {
        trigger: target.current,
        toggleActions: 'restart reverse restart restart',
      },
      backgroundImage: 'linear-gradient(transparent 80%, #F8CD07 20%)',
      backgroundSize: '100% 100%',
      delay,
      duration: 0.6,
      ease: 'expo.out',
    });
  }, [delay]);
  return <UnderlineContainer ref={target}>{children}</UnderlineContainer>;
};

export default Underline;
