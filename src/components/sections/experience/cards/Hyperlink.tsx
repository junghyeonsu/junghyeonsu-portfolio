import React from 'react';
import styled from 'styled-components';
import LinkIcon from '@material-ui/icons/Link';

interface HyperlinkProps {
  href: string;
  text: string;
}

const Containr = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  padding: 5px;
  transition: all 0.3s ease;

  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Link = styled.a`
  width: 100%;
`;

const Hyperlink = ({ href, text }: HyperlinkProps) => {
  return (
    <Containr>
      <LinkIcon />
      <Link target="_blank" href={href}>
        {text}
      </Link>
    </Containr>
  );
};

export default Hyperlink;
