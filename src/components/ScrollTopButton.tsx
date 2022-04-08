import React from 'react';
import styled from 'styled-components';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import { UNDER_LINE_COLOR } from '#/colors';

const Button = styled.button`
  position: fixed;
  right: 0;
  bottom: 0;
  color: white;
  background-color: #a6a6a6;
  border-radius: 50%;
  border: none;
  padding-top: 5px;
  transition: 0.3s all ease;
  margin: 20px;

  :hover {
    cursor: pointer;
    background-color: #ababab6f;
  }
`;

const ScrollTopButton = () => {
  const scrollToTop = () => window.scroll({ top: 0, behavior: 'smooth' });

  return (
    <Button onClick={scrollToTop}>
      <ArrowUpwardIcon />
    </Button>
  );
};

export default ScrollTopButton;
