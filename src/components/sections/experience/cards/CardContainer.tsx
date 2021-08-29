import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

interface CardContainerProps {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 79vw;
  height: 55vh;

  /* background-color: rgba(255, 255, 255, 0.05); */

  @media ${props => props.theme.mobile} {
    width: 85vw;
    height: 50vh;
  }
`;

const CardContainer = ({ children }: CardContainerProps) => {
  return <Container>{children}</Container>;
};

export default CardContainer;
