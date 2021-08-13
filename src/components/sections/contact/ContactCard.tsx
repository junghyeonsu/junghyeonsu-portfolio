import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.1);

  min-width: 474px;
  min-height: 300px;
  width: 47.4vw;
  height: 30vw;
  max-width: 790px;
  max-height: 500px;

  display: flex;
  justify-content: center;
  align-items: center;

  perspective: 10px;
  perspective-origin: 50% 50%;
  backface-visibility: visible;
  transform-style: preserve-3d;
  transition: all 1s ease;

  box-shadow: 0px 25px 30px rgba(0, 0, 0, 0.3);
`;

const ContactCard = () => {
  return <Container>카드</Container>;
};

export default ContactCard;
