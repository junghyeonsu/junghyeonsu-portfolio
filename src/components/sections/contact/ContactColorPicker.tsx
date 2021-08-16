import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import styles from './ContactColorPicker.module.css';

import {
  useContactCardContext,
  ColorProps,
} from '#/contexts/ContactCardContext';

interface Color {
  color: string;
}

const colors = [
  {
    card: '#67595E',
    background: '#A49393',
    text: '#EED6D3',
    point: '#E8B4B8',
  },
  {
    card: '#F652A0',
    background: '#4C5270',
    text: '#EEEDE7',
    point: '#0097d8',
  },
  {
    card: '#46c4ff',
    background: '#46c4ff',
    text: '#46c4ff',
    point: '#46c4ff',
  },
  {
    card: '#ff1b5f',
    background: '#ff1b5f',
    text: '#ff1b5f',
    point: '#ff1b5f',
  },
];

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-200px, -50%);
  transition: all 0.5s ease;
`;

const Button = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 1);

  :hover {
    cursor: pointer;
  }
`;

const ColorPicker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
`;

const ColorRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  column-gap: 10px;
  transition: all 0.3s ease;
  border-radius: 15px;

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
  const { setColor }: any = useContactCardContext(); // eslint-disable-line
  const [isOpen, setIsOpen] = useState(false);

  const onClickOpenButton = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const onClickColorRow = useCallback(
    (palette: ColorProps) => {
      setColor(palette);
    },
    [setColor],
  );

  return (
    <Container className={`${styles.picker} ${isOpen ? styles.open : ''}`}>
      <ColorPicker>
        {colors.map(palette => {
          return (
            <ColorRow
              key={palette.card}
              onClick={() => onClickColorRow(palette)}
            >
              <ColorCircle color={palette.text} />
              <ColorCircle color={palette.background} />
              <ColorCircle color={palette.card} />
              <ColorCircle color={palette.point} />
            </ColorRow>
          );
        })}
      </ColorPicker>
      <Button onClick={onClickOpenButton}>버튼</Button>
    </Container>
  );
};

export default ContactColorPicker;
