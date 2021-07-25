import { useRef, useEffect } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay === null) {
      return;
    }

    function tick() {
      savedCallback.current();
    }

    const id = setInterval(tick, delay);
    // eslint-disable-next-line consistent-return
    return () => clearInterval(id);
  }, [delay]);
}

export default useInterval;
