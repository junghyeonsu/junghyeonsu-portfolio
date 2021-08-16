import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';
import { BOLD_TEXT } from '#/constants';

interface Color {
  color: string;
}

interface TextProps {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
  color: string;
}

const TextContainer = styled.div`
  position: absolute;
  top: 8%;
  left: 5%;
  font-family: ${BOLD_TEXT};
  font-size: 3.4vw;
  z-index: 5;
  color: ${(props: Color) => props.color};
`;

const ContactTitle = ({ children, color }: TextProps) => {
  return <TextContainer color={color}>{children}</TextContainer>;
};

export default ContactTitle;
