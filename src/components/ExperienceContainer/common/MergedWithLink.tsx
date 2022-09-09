import CheckIcon from '@material-ui/icons/Check';
import React, { useMemo } from 'react';
import styled from 'styled-components';

import { BOLD_TEXT } from '#/constants';

import { InlineLinkText } from '.';

const MergedContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;

  @media ${props => props.theme.mobile} {
    font-size: 16px;
  }
`;

const ExplainCheckIcon = styled(CheckIcon)`
  margin-right: 10px;
  color: rgb(255, 174, 0);
`;

const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${BOLD_TEXT};
  width: 130px;
  height: 30px;
  margin-left: 7px;
  border-radius: 20px;
  background-color: #facd17;
  font-size: 17px;
  color: white;

  @media ${props => props.theme.mobile} {
    font-size: 12px;
    width: 110px;
    height: 26px;
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 90px;
  border-radius: 20px;

  @media ${props => props.theme.mobile} {
    width: 80px;
    border-radius: 20px;
  }
`;

const MergedWithLink = ({ href, date, merged, explain }: { href: string; date: string; merged: boolean; explain?: string }) => {
  const image = useMemo(
    () => (merged ? <Image draggable={false} src="/icons/Merged.png" alt="merged" /> : <Image draggable={false} src="/icons/Open.png" alt="open" />),
    [merged],
  );
  const text = useMemo(() => (merged ? 'merge된 pull request 링크' : 'open된 pull request 링크'), [merged]);

  return (
    <>
      <MergedContainer>
        <ExplainCheckIcon />
        {image}
        {merged && <Date>{date}</Date>}
      </MergedContainer>
      <MergedContainer>
        <ExplainCheckIcon />
        <InlineLinkText href={href}>
          {explain || ''} {text}
        </InlineLinkText>
      </MergedContainer>
    </>
  );
};

export default MergedWithLink;
