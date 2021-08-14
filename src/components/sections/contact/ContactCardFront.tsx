import React from 'react';
import styled from 'styled-components';

import { BOLD_TEXT } from '#/constants';

const Front = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  position: absolute;
  backface-visibility: hidden;
  transform-style: preserve-3d;
`;

const Title = styled.div`
  position: absolute;
  font-size: 32px;
  font-family: ${BOLD_TEXT};
  top: 10%;
  left: 5%;
  letter-spacing: 2px;
`;

const Name = styled.div`
  position: absolute;
  font-size: 40px;
  font-family: ${BOLD_TEXT};
  bottom: 10%;
  right: 5%;
  z-index: 5;
  letter-spacing: 2px;
`;

const BottomLine = styled.div`
  position: absolute;
  bottom: 10%;
  left: 0%;
  height: 10px;
  width: 100%;
  background-color: #0978ff;
`;

const Point = styled.span`
  color: #0978ff;
`;

const ContactCardFront = () => {
  return (
    <Front>
      <Title>
        Frontend Developer<Point>.</Point>
      </Title>
      <Name>정현수</Name>
      <BottomLine />
    </Front>
  );
};

export default ContactCardFront;
