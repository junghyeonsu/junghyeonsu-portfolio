import React, { useMemo } from 'react';
import styled from 'styled-components';
import CheckIcon from '@material-ui/icons/Check';
import { InlineLinkText } from '.';
import { BOLD_TEXT } from '#/constants';

const MergedContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7px;
  font-size: 23px;
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
  width: 150px;
  height: 35.35px;
  border-radius: 20px;
  background-color: #facd17;
  font-size: 20px;
  color: white;
`;

const Image = styled.img`
  object-fit: contain;
  width: 110px;
  border-radius: 20px;
`;

const MergedWithLink = ({ href, date, merged }: { href: string; date: string; merged: boolean }) => {
  const image = useMemo(
    () => (merged ? <Image draggable={false} src="/icons/Merged.png" alt="merged" /> : <Image draggable={false} src="/icons/Open.png" alt="open" />),
    [merged],
  );
  const text = useMemo(() => (merged ? 'merge된 pull request 링크' : 'open된 pull request 링크'), [merged]);

  return (
    <MergedContainer>
      <ExplainCheckIcon />
      {image}
      <Date>{date}</Date>
      <InlineLinkText href={href}>{text}</InlineLinkText>
    </MergedContainer>
  );
};

export default MergedWithLink;
