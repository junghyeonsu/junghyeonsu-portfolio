// import React, { useRef, useEffect, useState, useCallback } from 'react';
// import styled from 'styled-components';

// import { useLayoutContext } from '#/contexts/LayoutContext';

// const Container = styled.article`
//   position: fixed;
//   font-size: 11px;
//   bottom: 37px;
//   right: 11px;
//   padding: 10px;
//   color: red;
// `;

// const ScrollTimer = () => {
//   const { isPossibleMove }: any = useLayoutContext(); // eslint-disable-line 
//   const [counter, setCounter] = useState(1.5);

//   useEffect(() => {
//     const timer =
//       counter >= 0 &&
//       setInterval(() => setCounter(Math.round(counter - 0.1)), 100);
//     return () => {
//       clearInterval(timer);
//       setCounter(1.5);
//     };
//   }, [isPossibleMove, counter]);

//   return <Container>{counter}</Container>;
// };

// export default ScrollTimer;
