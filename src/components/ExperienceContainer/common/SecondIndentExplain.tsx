import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import React from 'react';
import styled from 'styled-components';

const ExplainContainer = styled.div`
  position: relative;
  left: 30px;
  display: flex;
`;

const ExperienceCardExplain = styled.div`
  font-size: 16px;

  @media ${props => props.theme.mobile} {
    font-size: 14px;
  }
`;

const ExplainCircleIcon = styled(FiberManualRecordOutlinedIcon)`
  margin-right: 10px;
  color: rgb(255, 174, 0);
`;

const SecondIndentExplain = ({ children }: { children: React.ReactNode }) => {
  return (
    <ExplainContainer>
      <ExplainCircleIcon fontSize="small" />
      <ExperienceCardExplain>{children}</ExperienceCardExplain>
    </ExplainContainer>
  );
};

export default SecondIndentExplain;
