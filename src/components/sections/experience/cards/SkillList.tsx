import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

interface SkillListProps {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
}

const Containr = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  right: 0;
`;

const SkillList = ({ children }: SkillListProps) => {
  return <Containr>{children}</Containr>;
};

export default SkillList;
