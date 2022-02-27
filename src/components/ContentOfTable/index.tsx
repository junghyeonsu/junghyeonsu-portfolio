import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { useLayoutContext } from '#/contexts/LayoutContext';

const Container = Styled.div`
	position: fixed;
	right: 0;
	top: 0;
	background-color: #00a6ff;
	color: white;
	transition: opacity 0.2s ease;
	opacity: ${({ visible }: { visible: boolean }) => (visible ? 1 : 0)};
`;

const ContentOfTable = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { currentScrollTop, experienceOffsetTop }: any = useLayoutContext();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (currentScrollTop > experienceOffsetTop) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [currentScrollTop, experienceOffsetTop]);

  return <Container visible={visible}>ContentOfTable</Container>;
};

export default ContentOfTable;
