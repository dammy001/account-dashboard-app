import { useLayoutEffect } from 'react';

export const useEventListener = (
  target: EventTarget,
  name: string,
  fn: any
) => {
  useLayoutEffect(() => {
    target.addEventListener(name, fn);
    return () => target.removeEventListener(name, fn);
  }, []);
};
