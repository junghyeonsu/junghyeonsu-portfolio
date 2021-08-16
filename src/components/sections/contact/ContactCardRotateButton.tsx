import React from 'react';
import styled from 'styled-components';
import CachedIcon from '@material-ui/icons/Cached';

import { useContactCardContext } from '#/contexts/ContactCardContext';

interface ButtonProps {
  onClickButton: () => void;
}

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%);
  transition: all 0.3s ease;
  color: rgba(0, 0, 0, 0.3);

  :hover {
    cursor: pointer;
    transform: translate(-50%) scale(1.1);
  }
`;

const ContactCardRotateButton = ({ onClickButton }: ButtonProps) => {
  const { color }: any = useContactCardContext(); // eslint-disable-line

  return (
    <ButtonContainer>
      <span style={{ color: color.point }}>
        <CachedIcon fontSize="large" onClick={onClickButton} />
      </span>
    </ButtonContainer>
  );
};

export default ContactCardRotateButton;
