import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

interface SkillListProps {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
}

const Containr = styled.div`
  position: absolute;
  display: flex;
  column-gap: 5px;
  bottom: 0;
  right: 0;
  flex-wrap: wrap;

  @media ${props => props.theme.mobile} {
    flex-wrap: wrap;
    row-gap: 5px;
  }
`;

const SkillList = ({ children }: SkillListProps) => {
  return <Containr>{children}</Containr>;
};

export default SkillList;
