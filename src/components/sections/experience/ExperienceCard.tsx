import React from 'react';
import styled from 'styled-components';

interface CardProps {
  index: number;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  border: 2px solid transparent;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
`;

const ExperienceCard = ({ index }: CardProps) => {
  return <Container>{index} 카드</Container>;
};

export default ExperienceCard;
