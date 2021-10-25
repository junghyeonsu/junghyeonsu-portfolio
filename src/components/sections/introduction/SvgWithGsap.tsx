import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import Superhero from '#/images/Superhero';

interface SvgWithGsapProps {
  delay: number;
}

const ImageBox = styled.div`
  position: absolute;
  top: 10%;
  right: 0;
  width: 50vw;
  height: 10vh;

  @media ${props => props.theme.mobile} {
    width: 95vw;
  }
`;

const SvgWithGsap = ({ delay }: SvgWithGsapProps) => {
  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        toggleActions: 'play none none none',
      },
      top: '30%',
      delay,
      duration: 2,
      ease: 'elastic.out',
    });
  }, [delay]);

  return (
    <ImageBox ref={containerRef}>
      <Superhero />
    </ImageBox>
  );
};

export default SvgWithGsap;
