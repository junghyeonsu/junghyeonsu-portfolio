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

const ButtonCotainer = styled.div`
  z-index: 5;
  display: flex;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
`;

const Button = styled.button``;

const ExperienceCardList = () => {
  const { xLocation, nowExperienceList, onClickLeft, onClickRight }: any =
    useExperienceContext(); // eslint-disable-line
  const containerRef = useRef<any>(null); // eslint-disable-line

  return (
    <>
      <Container ref={containerRef} xLocation={xLocation}>
        {nowExperienceList.map(
          (experience: { id: number; card: JSX.Element }) => (
            <div key={experience.id}>{experience.card}</div>
          ),
        )}
      </Container>

      <ButtonCotainer>
        <Button onClick={onClickLeft}>왼쪽</Button>
        <Button onClick={onClickRight}>오른쪽</Button>
      </ButtonCotainer>
    </>
  );
};

export default ExperienceCardList;
