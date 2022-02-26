import React from 'react';
import * as Styled from '../styled';

const InlineLinkText = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <Styled.ExplainLinkText href={href} target="_blank">
      {children}
    </Styled.ExplainLinkText>
  );
};

export default InlineLinkText;
