import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';

const Container = styled.article`
  position: fixed;
  font-size: 20px;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  background-color: black;
  color: white;
`;

const ScrollGauge = () => {
  const { scrollGauge }: any = useLayoutContext(); // eslint-disable-line 

  return <Container>{scrollGauge}</Container>;
};

export default ScrollGauge;
