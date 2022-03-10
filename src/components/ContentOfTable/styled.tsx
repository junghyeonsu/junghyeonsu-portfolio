import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #00a6ff;
  color: white;
  transition: opacity 0.2s ease;
  opacity: ${({ visible }: { visible: boolean }) => (visible ? 1 : 0)};
`;

export const H1 = styled.div``;
