import React from 'react';
import styled from 'styled-components';

import { useExperienceContext } from '#/contexts/ExperienceContext';

const Container = styled.div`
  display: flex;
  column-gap: 10px;
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
`;

const UnActiveCircle = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  height: 10px;
  width: 10px;
  border-radius: 50%;
`;

const ActiveCircle = styled.div`
  background-color: rgba(255, 255, 255, 1);
  height: 10px;
  width: 10px;
  border-radius: 50%;
`;

const ExperienceProgress = () => {
  const { nowExperienceList, nowExperienceIndex }: any = useExperienceContext(); // eslint-disable-line
  return (
    <Container>
      {nowExperienceList.map(
        (item: { id: number; card: JSX.Element }, idx: number) =>
          nowExperienceIndex === idx ? (
            <div key={item.id}>
              <ActiveCircle />
            </div>
          ) : (
            <div key={item.id}>
              <UnActiveCircle />
            </div>
          ),
      )}
    </Container>
  );
};

export default ExperienceProgress;
