import { useState } from 'react';
import { useEventListener } from './useEventListener';

export const useWindowPosition = () => {
  const [scrollPosition, setPosition] = useState<number>(0);

  const updatePosition = () => {
    setPosition(window.pageYOffset);
  };

  useEventListener(window, 'scroll', updatePosition);

  return { scrollPosition };
};
