import gsap from 'gsap';
import React, { ReactChild, ReactChildren, useEffect, useRef } from 'react';

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
        toggleActions: 'play none none none',
      },
      opacity: 0,
      delay,
      duration: 1.5,
      ease: 'power3.out',
    });
  }, [delay]);
  return <div ref={target}>{children}</div>;
};

export default FadeInContent;
