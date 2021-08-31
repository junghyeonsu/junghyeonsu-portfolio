import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';

import styles from './ContactCard.module.css';
import ContactCardBack from '#/components/sections/contact/ContactCardBack';
import ContactCardFront from '#/components/sections/contact/ContactCardFront';
import ContactCardRotateButton from '#/components/sections/contact/ContactCardRotateButton';

const CardWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  perspective: 5000px;
`;

const Container = styled.div`
  min-width: 474px;
  min-height: 300px;
  width: 47.4vw;
  height: 30vw;
  max-width: 790px;
  max-height: 500px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 1.2s ease;

  box-shadow: 10px 25px 100px rgba(0, 0, 0, 0.3);

  @media ${props => props.theme.mobile} {
    min-width: 80vw;
    min-height: 50vw;
  }
`;

const ContactCard = () => {
  const [isFlip, setIsFlip] = useState(false);

  const onClickButton = useCallback(() => {
    setIsFlip(!isFlip);
  }, [isFlip]);

  return (
    <>
      <CardWrapper>
        <Tilt>
          <Container className={`${styles.card} ${isFlip ? styles.flip : ''}`}>
            <ContactCardFront />
            <ContactCardBack />
          </Container>
        </Tilt>
      </CardWrapper>
      <ContactCardRotateButton onClickButton={onClickButton} />
    </>
  );
};

export default ContactCard;
