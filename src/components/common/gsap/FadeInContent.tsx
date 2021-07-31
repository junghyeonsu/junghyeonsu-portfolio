import React, { useRef, useEffect, ReactChild, ReactChildren } from 'react';
import gsap from 'gsap';

interface TextProps {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
  delay: number;
}

const FadeInContent = ({ children, delay }: TextProps) => {
  const target = useRef(null);
  useEffect(() => {
    gsap.from(target.current, {
      scrollTrigger: {
        trigger: target.current,
        toggleActions: 'restart reverse restart restart',
      },
      opacity: 0,
      delay,
      duration: 1,
      ease: 'power3.out',
    });
  }, [delay]);
  return <div ref={target}>{children}</div>;
};

export default FadeInContent;
