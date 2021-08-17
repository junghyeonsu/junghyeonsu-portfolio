import React from 'react';
import styled from 'styled-components';

interface HyperlinkProps {
  href: string;
  text: string;
}

const Containr = styled.div`
  display: flex;
  column-gap: 5px;
`;

const Icon = styled.div``;

const Link = styled.a``;

const Hyperlink = ({ href, text }: HyperlinkProps) => {
  return (
    <Containr>
      <Icon>아이콘</Icon>
      <Link href={href}>{text}</Link>
    </Containr>
  );
};

export default Hyperlink;
