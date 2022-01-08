import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 600px;
  width: 1100px;
  background-color: rgba(255, 255, 255, 0.01);
  box-shadow: 3px 7px 62px 32px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  color: rgba(0, 0, 0, 0.8);
`;

const Card = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default Card;
