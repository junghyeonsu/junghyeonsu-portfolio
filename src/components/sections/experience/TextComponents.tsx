import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 240px;
  width: 330px;
  background-color: rgba(255, 255, 255, 0.9);
  color: rgba(0, 0, 0, 0.8);
`;

const TextComponents = () => {
  const hi = 'hi';
  return (
    <Container>
      <Card>카드</Card>
      <Card>카드</Card>
      <Card>카드</Card>
      <Card>카드</Card>
      <Card>카드</Card>
      <Card>카드</Card>
    </Container>
  );
};

export default TextComponents;
