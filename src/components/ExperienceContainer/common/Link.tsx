import LinkIcon from '@material-ui/icons/Link';
import React from 'react';
import styled from 'styled-components';

const HyperLink = styled.div`
  display: flex;
  column-gap: 10px;
`;

const HyperLinkIcon = styled(LinkIcon)``;

const HyperLinkText = styled.a`
  text-underline-offset: 5px;
  font-size: 20px;
  width: fit-content;

  background: linear-gradient(to right, transparent 50%, rgb(255, 218, 55) 50%);
  background-size: 200%;
  background-position: 0 0;

  transition: 0.25s ease;

  :hover {
    background-position: -100% 0;
  }

  @media ${props => props.theme.mobile} {
    font-size: 16px;
  }
`;

const Link = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <HyperLink>
      <HyperLinkIcon />
      <HyperLinkText href={href} target="_blank">
        {children}
      </HyperLinkText>
    </HyperLink>
  );
};

export default Link;
