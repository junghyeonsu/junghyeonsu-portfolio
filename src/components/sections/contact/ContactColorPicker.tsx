import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import styles from './ContactColorPicker.module.css';
import {
  useContactCardContext,
  ColorProps,
} from '#/contexts/ContactCardContext';

import { CONTACT_COLOR_PICKER } from '#/colors';

interface Color {
  color: string;
}

interface Row {
  isSelect: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-180px, -50%);
  transition: all 0.5s ease;
  z-index: 10;

  @media ${props => props.theme.mobile} {
    top: 75%;
  }
`;

const Button = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  margin-left: 2px;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media ${props => props.theme.mobile} {
    width: 30px;
    height: 30px;
  }
`;

const ButtonText = styled.span`
  font-size: 8px;
`;

const ColorPicker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 230px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  row-gap: 10px;
`;

const ColorRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  column-gap: 10px;
  transition: all 0.3s ease;
  border-radius: 15px;
  transform: ${(props: Row) => (props.isSelect ? 'scale(1.1)' : 'scale(1)')};
  background-color: ${(props: Row) =>
    props.isSelect ? 'rgba(255, 255, 255, 0.7)' : ''};

  :hover {
    background-color: rgba(255, 255, 255, 1);
    cursor: pointer;
  }
`;

const ColorCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props: Color) => props.color};
`;

const ContactColorPicker = () => {
  const { color, setColor }: any = useContactCardContext(); // eslint-disable-line
  const [isOpen, setIsOpen] = useState(false);

  const onClickOpenButton = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const onClickColorRow = useCallback(
    (palette: ColorProps) => {
      setIsOpen(!isOpen);
      setColor(palette);
    },
    [setColor, isOpen],
  );

  return (
    <Container className={`${styles.picker} ${isOpen ? styles.open : ''}`}>
      <ColorPicker>
        {CONTACT_COLOR_PICKER.map(palette => {
          return (
            <ColorRow
              key={palette.card}
              onClick={() => onClickColorRow(palette)}
              isSelect={color === palette}
            >
              <ColorCircle color={palette.text} />
              <ColorCircle color={palette.background} />
              <ColorCircle color={palette.card} />
              <ColorCircle color={palette.point} />
            </ColorRow>
          );
        })}
      </ColorPicker>
      <Button
        className={`${styles.button} ${isOpen ? styles.open : styles.close}`}
        onClick={onClickOpenButton}
      >
        <ChevronRightIcon fontSize="small" />
        {!isOpen ? <ButtonText>color</ButtonText> : ''}
      </Button>
    </Container>
  );
};

export default ContactColorPicker;
