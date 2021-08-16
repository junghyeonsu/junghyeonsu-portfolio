import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
import { useContactCardContext } from '#/contexts/ContactCardContext';
import { WHITE_BACKGROUND_COLOR, BLACK_TEXT_COLOR } from '#/colors';

import {
  FadeOutHeaderText,
  FadeInContent,
  Underline,
} from '#/components/common/gsap';

import ContactCard from '#/components/sections/contact/ContactCard';
import ContactTitle from '#/components/sections/contact/ContactTitle';
import ContactColorPicker from '#/components/sections/contact/ContactColorPicker';

interface Color {
  color: string;
}

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  background-color: ${(props: Color) => props.color || WHITE_BACKGROUND_COLOR};
  color: ${BLACK_TEXT_COLOR};
`;

const Contact = () => {
  const { setContactOffsetTop }: any = useLayoutContext(); // eslint-disable-line
  const { color }: any = useContactCardContext(); // eslint-disable-line

  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const containerOffsetTop = containerRef.current.offsetTop;
    console.log('setContactOffsetTop:', containerOffsetTop); // eslint-disable-line
    setContactOffsetTop(containerOffsetTop);
  }, [setContactOffsetTop]);

  return (
    <Container color={color.background} ref={containerRef}>
      <FadeOutHeaderText color={color.text} delay={1}>
        Contact
      </FadeOutHeaderText>
      <FadeInContent delay={2.5}>
        <ContactTitle color={color.text}>
          <Underline color={color.point} delay={0}>
            Contact
          </Underline>
        </ContactTitle>
        <ContactCard />
        <ContactColorPicker />
      </FadeInContent>
    </Container>
  );
};

export default Contact;
