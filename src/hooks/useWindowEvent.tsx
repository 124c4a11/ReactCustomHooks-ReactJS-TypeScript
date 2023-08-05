import { useEffect } from 'react';
import { useEventCallback } from './useEventCallback';

type GetWindowEvent<Type extends string> = Type extends keyof WindowEventMap
  ? WindowEventMap[Type]
  : Event;

export function useWindowEvent<Type extends string>(
  type: Type,
  cb: (event: GetWindowEvent<Type>) => void,
  passive?: boolean
): void;

export function useWindowEvent(
  type: string,
  cb: (event: Event) => void,
  passive = false
) {
  const eventCb = useEventCallback(cb);

  useEffect(() => {
    window.addEventListener(type, eventCb, { passive });

    return () => window.removeEventListener(type, eventCb);
  }, [type, eventCb, passive]);
}
