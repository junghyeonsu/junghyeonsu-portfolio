import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  color: ${({ theme }) => theme.color.main};
`;

const Main = () => {
  return <Container>Hyeonsu Jung</Container>;
};

export default Main;
