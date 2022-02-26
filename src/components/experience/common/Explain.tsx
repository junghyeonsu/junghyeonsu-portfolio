import React from 'react';
import * as Styled from '../styled';

const Explain = ({ children }: { children: React.ReactNode }) => {
  return (
    <Styled.ExperienceCardExplain>
      <Styled.ExplainCheckIcon />
      {children}
    </Styled.ExperienceCardExplain>
  );
};

export default Explain;
