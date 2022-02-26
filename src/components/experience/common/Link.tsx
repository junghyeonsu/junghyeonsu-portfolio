import React from 'react';
import * as Styled from '../styled';

const Link = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <Styled.HyperLink href={href} target="_blank">
      <Styled.HyperLinkIcon />
      {children}
    </Styled.HyperLink>
  );
};

export default Link;
