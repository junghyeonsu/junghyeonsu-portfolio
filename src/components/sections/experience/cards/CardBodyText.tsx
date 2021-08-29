import React from 'react';
import styled from 'styled-components';

interface CardBodyTextProps {
  text: string;
}

const BodyText = styled.p`
  margin: 0;
  padding: 5px;

  @media ${props => props.theme.mobile} {
    font-size: 3vw;
  }
`;

const CardBodyText = ({ text }: CardBodyTextProps) => {
  return <BodyText>• {text}</BodyText>;
};

export default CardBodyText;
