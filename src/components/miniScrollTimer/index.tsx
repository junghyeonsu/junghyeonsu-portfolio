import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.article`
  position: fixed;
  font-size: 11px;
  bottom: 37px;
  right: 11px;
  padding: 10px;
  color: red;
`;

const MiniScrollTimer = () => {
  const [counter, setCounter] = useState(4);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter(counter - 1);
    }, 100);
    return () => clearTimeout(timer);
  });

  return <Container>{counter}</Container>;
};

export default MiniScrollTimer;
