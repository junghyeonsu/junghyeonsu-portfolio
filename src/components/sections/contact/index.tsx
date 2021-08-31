import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
import { useContactCardContext } from '#/contexts/ContactCardContext';
import { BLACK_TEXT_COLOR } from '#/colors';

import { FadeOutHeaderText, FadeInContent } from '#/components/common/gsap';

import ContactCard from '#/components/sections/contact/ContactCard';
import ContactTitle from '#/components/sections/contact/ContactTitle';
import ContactColorPicker from '#/components/sections/contact/ContactColorPicker';
import ContactUnderline from '#/components/sections/contact/ContactUnderline';
import SectionUpButton from '#/components/common/SectionUpButton';

interface Color {
  color: string;
}

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: ${(props: Color) => props.color};
  color: ${BLACK_TEXT_COLOR};
`;

const Contact = () => {
  const { setContactOffsetTop, windowWidth }: any = useLayoutContext(); // eslint-disable-line
  const { color }: any = useContactCardContext(); // eslint-disable-line

  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const containerOffsetTop = containerRef.current.offsetTop;
    setContactOffsetTop(containerOffsetTop);
  }, [setContactOffsetTop, windowWidth]);

  return (
    <Container color={color.background} ref={containerRef}>
      <FadeOutHeaderText color={color.card} delay={1}>
        Contact
      </FadeOutHeaderText>
      <FadeInContent delay={2.5}>
        <ContactTitle color={color.card}>
          <ContactUnderline color={color.point}>Contact</ContactUnderline>
        </ContactTitle>
        <ContactCard />
        <ContactColorPicker />
        <SectionUpButton />
      </FadeInContent>
    </Container>
  );
};

export default Contact;
