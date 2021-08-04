import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  border: 2px solid transparent;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
`;

const ExperienceCard = () => {
  return <Container>안녕하세요</Container>;
};

export default ExperienceCard;
