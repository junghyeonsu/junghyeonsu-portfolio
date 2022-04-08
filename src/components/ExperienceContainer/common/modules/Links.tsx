import React from 'react';
import styled from 'styled-components';
import LinkIcon from '@material-ui/icons/Link';

import { Explain, InlineLinkText } from '../index';
import { CommonArticleContainer, CommonArticleContainerTitle } from '../../styled';

interface LinkProps {
  text: string;
  href: string;
}

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
`;

const Links = ({ links }: { links: LinkProps[] }) => {
  return (
    <CommonArticleContainer>
      <CommonArticleContainerTitle>
        <LinkIcon />
        관련링크들
      </CommonArticleContainerTitle>
      <LinksContainer>
        {links.map((link, index) => (
          <Explain key={`${index + 1}-${link.text}`}>
            <InlineLinkText href={link.href}>{link.text}</InlineLinkText>
          </Explain>
        ))}
      </LinksContainer>
    </CommonArticleContainer>
  );
};

export default Links;
