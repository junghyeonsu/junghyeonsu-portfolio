import CheckIcon from '@material-ui/icons/Check';
import React from 'react';
import styled from 'styled-components';

const ExplainContainer = styled.div`
  display: flex;
`;

const ExperienceCardExplain = styled.div`
  font-size: 20px;

  @media ${props => props.theme.mobile} {
    font-size: 16px;
  }
`;

const ExplainCheckIcon = styled(CheckIcon)`
  margin-right: 10px;
  color: rgb(255, 174, 0);
`;

const Explain = ({ children }: { children: React.ReactNode }) => {
  return (
    <ExplainContainer>
      <ExplainCheckIcon />
      <ExperienceCardExplain>{children}</ExperienceCardExplain>
    </ExplainContainer>
  );
};

export default Explain;
