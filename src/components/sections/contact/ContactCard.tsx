import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  perspective: 2000;
`;

const Container = styled(motion.div)`
  color: rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.8);

  min-width: 474px;
  min-height: 300px;
  width: 47.4vw;
  height: 30vw;
  max-width: 790px;
  max-height: 500px;

  display: flex;
  justify-content: center;
  align-items: center;

  transform-style: preserve-3d;
  transform-origin: center center;

  box-shadow: 10px 25px 50px rgba(0, 0, 0, 0.3);
`;

const ContactCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <CardWrapper>
      <Container
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        transition={{ stiffness: 30 }}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
      >
        카드
      </Container>
    </CardWrapper>
  );
};

export default ContactCard;
