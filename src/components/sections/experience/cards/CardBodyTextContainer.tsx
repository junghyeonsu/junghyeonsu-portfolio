import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

interface CardBodyTextContainerProps {
  children?:
    | ReactChild
    | ReactChildren
    | ReactChildren[]
    | ReactChild[]
    | void[];
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  @media ${props => props.theme.mobile} {
    align-items: flex-start;
    width: 80vw;
  }
`;

const CardBodyTextContainer = ({ children }: CardBodyTextContainerProps) => {
  return <Body>{children}</Body>;
};

export default CardBodyTextContainer;
