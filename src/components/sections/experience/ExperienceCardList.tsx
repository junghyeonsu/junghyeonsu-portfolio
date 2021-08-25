import React, { useRef } from 'react';
import styled from 'styled-components';

import { useExperienceContext } from '#/contexts/ExperienceContext';

interface ContainerProps {
  xLocation: number;
}

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 0;
  transition: transform 1s ease;
  transform: translateX(${(props: ContainerProps) => props.xLocation}vw)
    translateY(-50%);
`;

const ExperienceCardList = () => {
  const { xLocation, nowExperienceList }: any = useExperienceContext(); // eslint-disable-line
  const containerRef = useRef<any>(null); // eslint-disable-line

  return (
    <Container ref={containerRef} xLocation={xLocation}>
      {nowExperienceList.map(
        (experience: { id: number; card: JSX.Element }) => (
          <div key={experience.id}>{experience.card}</div>
        ),
      )}
    </Container>
  );
};

export default ExperienceCardList;
