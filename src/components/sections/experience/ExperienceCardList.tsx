import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

interface Props {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
}

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateX(-100vw) translateY(-50%);
`;

const ExperienceCardList = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default ExperienceCardList;
