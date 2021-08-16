import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

interface Color {
  color: string;
}

interface UnderlineProps {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
  color: string;
}

const UnderlineContainer = styled.span`
  background-image: linear-gradient(
    transparent 80%,
    ${(props: Color) => props.color} 20%
  );
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
`;

const Underline = ({ children, color }: UnderlineProps) => {
  return <UnderlineContainer color={color}>{children}</UnderlineContainer>;
};

export default Underline;
