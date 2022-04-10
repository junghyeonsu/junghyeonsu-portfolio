import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 220px;

  background-color: rgb(245, 245, 245);
  color: #858585;
  z-index: 5;
`;

const Footer = () => {
  return <Container>Copyright {new Date().getFullYear()}. junghyeonsu all rights reserved.</Container>;
};

export default Footer;
