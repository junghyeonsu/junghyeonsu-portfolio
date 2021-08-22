import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

interface HyperlinkContainerProps {
  children?:
    | ReactChild
    | ReactChildren
    | ReactChildren[]
    | ReactChild[]
    | void[];
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const HyperlinkContainer = ({ children }: HyperlinkContainerProps) => {
  return <Body>{children}</Body>;
};

export default HyperlinkContainer;
