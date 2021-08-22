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
`;

const CardBodyTextContainer = ({ children }: CardBodyTextContainerProps) => {
  return <Body>{children}</Body>;
};

export default CardBodyTextContainer;
