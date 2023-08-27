import { useEffect } from 'react';
import { useEventCallback } from './useEventCallback';

interface UseOutsideClickOptions {
  elementRef: React.RefObject<HTMLElement>;
  triggerRef?: React.RefObject<HTMLElement>;
  isOutsideClickEnabled?: boolean;
  onOutsideClick(e: MouseEvent | TouchEvent): void;
}

export function useOutsideClick({
  elementRef,
  triggerRef,
  isOutsideClickEnabled = true,
  onOutsideClick,
}: UseOutsideClickOptions) {
  const handleOutsideClick = useEventCallback(onOutsideClick);

  useEffect(() => {
    if (!isOutsideClickEnabled) return;

    console.log('attach event listener');

    const handleClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target;

      if (!(target instanceof Node)) return;
      if (!elementRef.current) return;

      const ignoreElements = [elementRef.current];

      if (triggerRef?.current) {
        ignoreElements.push(triggerRef.current);
      }

      if (!ignoreElements.some((element) => element.contains(target))) {
        console.log('outside click');
        handleOutsideClick(e);
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [isOutsideClickEnabled, elementRef, triggerRef, handleOutsideClick]);
}
