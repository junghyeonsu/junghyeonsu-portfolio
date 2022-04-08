import React from 'react';
import styled from 'styled-components';

const ExplainLinkText = styled.a`
  background: linear-gradient(to right, transparent 50%, rgb(255, 218, 55) 50%);
  background-size: 200%;
  background-position: 0 0;

  text-underline-offset: 3.5px;
  transition: 0.25s ease;

  :hover {
    background-position: -100% 0;
  }
`;

const InlineLinkText = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <ExplainLinkText href={href} target="_blank">
      {children}
    </ExplainLinkText>
  );
};

export default InlineLinkText;
