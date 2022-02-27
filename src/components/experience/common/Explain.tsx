import React from 'react';
import styled from 'styled-components';
import CheckIcon from '@material-ui/icons/Check';

const ExperienceCardExplain = styled.div`
  font-size: 23px;
`;

const ExplainCheckIcon = styled(CheckIcon)`
  margin-right: 10px;
  color: rgb(255, 174, 0);
`;

const Explain = ({ children }: { children: React.ReactNode }) => {
  return (
    <ExperienceCardExplain>
      <ExplainCheckIcon />
      {children}
    </ExperienceCardExplain>
  );
};

export default Explain;
