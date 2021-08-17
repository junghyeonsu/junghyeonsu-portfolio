import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

interface CardContainerProps {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  min-width: 474px;
  min-height: 300px;
  width: 79vw;
  height: 48vh;
  max-width: 800px;
  /* max-height: 600px; */

  /* background-color: rgba(255, 255, 255, 0.05); */
`;

const CardContainer = ({ children }: CardContainerProps) => {
  return <Container>{children}</Container>;
};

export default CardContainer;
