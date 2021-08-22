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
  font-size: 36px;
`;

const Date = styled.p``;

const CardTitle = ({ title, date }: CardTitleProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </Container>
  );
};

export default CardTitle;
