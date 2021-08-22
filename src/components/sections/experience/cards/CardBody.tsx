import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

interface CardBodyProps {
  children?:
    | ReactChild
    | ReactChildren
    | ReactChildren[]
    | ReactChild[]
    | void[];
}

const Body = styled.div``;

const CardBody = ({ children }: CardBodyProps) => {
  return <Body>{children}</Body>;
};

export default CardBody;
