import React from 'react';
import styled from 'styled-components';

import { BOLD_TEXT } from '#/constants';
import { useContactCardContext } from '#/contexts/ContactCardContext';

interface Color {
  color: string;
}

const Front = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props: Color) => props.color};
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
  color: ${(props: Color) => props.color};

  @media ${props => props.theme.mobile} {
    font-size: 5vw;
  }
`;

const Name = styled.div`
  position: absolute;
  font-size: 40px;
  font-family: ${BOLD_TEXT};
  bottom: 10%;
  right: 5%;
  z-index: 5;
  letter-spacing: 2px;
  color: ${(props: Color) => props.color};

  @media ${props => props.theme.mobile} {
    font-size: 6vw;
  }
`;

const BottomLine = styled.div`
  position: absolute;
  bottom: 10%;
  left: 0%;
  height: 10px;
  width: 100%;
  background-color: ${(props: Color) => props.color};

  @media ${props => props.theme.mobile} {
    height: 5px;
  }
`;

const Point = styled.span`
  color: ${(props: Color) => props.color};
`;

const ContactCardFront = () => {
  const { color }: any = useContactCardContext(); // eslint-disable-line
  return (
    <Front color={color.card}>
      <Title color={color.text}>
        Frontend Developer<Point color={color.point}>.</Point>
      </Title>
      <Name color={color.text}>정현수</Name>
      <BottomLine color={color.point} />
    </Front>
  );
};

export default ContactCardFront;
