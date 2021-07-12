import React, {
  useRef,
  useEffect,
  ReactChild,
  ReactChildren,
  ReactElement,
} from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { BOLD_TEXT } from '#/constants';

const Container = styled.p`
  font-family: ${BOLD_TEXT};
  font-size: 40px;
  letter-spacing: 2px;
`;

const HeaderText = ({
  children,
}: {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
}): ReactElement => {
  const myHeader = useRef(null);

  useEffect(() => {
    gsap.from(myHeader.current, {
      scrollTrigger: {
        trigger: myHeader.current,
        toggleActions: 'restart restart restart none',
      },
      opacity: 0,
      duration: 1,
    });
  }, []);

  return <Container ref={myHeader}>{children}</Container>;
};

export default HeaderText;
