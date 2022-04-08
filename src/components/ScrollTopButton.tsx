import React, { useCallback } from 'react';
import styled from 'styled-components';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const Button = styled.button`
  position: fixed;
  right: 0;
  bottom: 0;
  background-color: #efefef;
  border-radius: 10px;
  border: none;
  padding-top: 5px;
  transition: 0.3s all ease;
  margin: 20px;
  z-index: 100;

  :hover {
    cursor: pointer;
    background-color: #c7c7c7;
  }
`;

const ScrollTopButton = () => {
  const scrollToTop = useCallback(() => window.scroll({ top: 0, behavior: 'smooth' }), []);

  return (
    <Button onClick={scrollToTop}>
      <ArrowUpwardIcon />
    </Button>
  );
};

export default ScrollTopButton;
