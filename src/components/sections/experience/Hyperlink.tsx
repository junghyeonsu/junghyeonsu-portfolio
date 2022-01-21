import React from 'react';
import styled from 'styled-components';
import LinkIcon from '@material-ui/icons/Link';

interface HyperlinkProps {
  href: string;
  text: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  padding: 5px;
  transition: all 0.3s ease;

  @media ${props => props.theme.mobile} {
    column-gap: 1vw;
    padding: 1vw;
  }

  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Link = styled.a`
  width: 100%;

  @media ${props => props.theme.mobile} {
    font-size: 3vw;
  }
`;

const Hyperlink = ({ href, text }: HyperlinkProps) => {
  return (
    <Container>
      <LinkIcon />
      <Link target="_blank" href={href}>
        {text}
      </Link>
    </Container>
  );
};

export default Hyperlink;
