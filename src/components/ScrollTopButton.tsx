import React, { useCallback } from 'react';
import styled from 'styled-components';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const Button = styled.button`
  position: fixed;
  right: 68px;
  bottom: 0;
  width: 60px;
  height: 60px;
  background-color: #efefef;
  border-radius: 26px;
  border: none;
  transition: 0.3s all ease;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px, rgb(0 0 0 / 15%) 0px 8px 30px, rgb(255 255 255 / 20%) 0px 0px 0px 1px inset !important;
  margin: 25px;
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
      <ArrowUpwardIcon fontSize="large" />
    </Button>
  );
};

export default ScrollTopButton;
