import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2d3748;
  color: #edf2f7;
  scroll-snap-align: start;
`;

const Introduction = () => {
  return <Container>Introduction</Container>;
};

export default Introduction;
