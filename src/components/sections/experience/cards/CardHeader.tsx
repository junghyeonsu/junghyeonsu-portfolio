import React from 'react';
import styled from 'styled-components';

interface CardTitleProps {
  title: string;
  date: string;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h1`
  font-size: 34px;

  @media ${props => props.theme.mobile} {
    font-size: 5vw;
  }
`;

const Date = styled.p`
  font-size: 12px;

  @media ${props => props.theme.mobile} {
    font-size: 2.6vw;
  }
`;

const CardTitle = ({ title, date }: CardTitleProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </Container>
  );
};

export default CardTitle;
