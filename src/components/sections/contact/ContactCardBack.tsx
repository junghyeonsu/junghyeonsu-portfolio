import React from 'react';
import styled from 'styled-components';

const Back = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;

const BottomLine = styled.div`
  position: absolute;
  bottom: 10%;
  left: 0%;
  height: 10px;
  width: 100%;
  background-color: #fff020;
`;

const ContactCardBack = () => {
  return (
    <Back>
      백
      <BottomLine />
    </Back>
  );
};

export default ContactCardBack;
