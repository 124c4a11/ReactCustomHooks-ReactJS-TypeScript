'use client';

import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useRef, useState } from 'react';

interface TooltipProps {
  isOpened: boolean;
  triggerRef?: React.RefObject<HTMLElement>;
  onClose: () => void;
}

function Tooltip({ isOpened, triggerRef, onClose }: TooltipProps) {
  const tooltipRef = useRef(null);

  useOutsideClick({
    elementRef: tooltipRef,
    triggerRef,
    onOutsideClick: onClose,
    isOutsideClickEnabled: isOpened,
  });

  console.log('render tooltip, isOpened = ', isOpened);

  if (!isOpened) return null;

  return (
    <div
      ref={tooltipRef}
      style={{
        width: 'max-content',
        padding: '4px 8px',
        borderRadius: '4px',
        color: 'white',
        backgroundColor: 'black',
      }}
    >
      Some Text
    </div>
  );
}

export default function UseOutsideClickExample() {
  const [isOpened, setIsOpened] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onClose = () => setIsOpened(false);

  return (
    <>
      <h1>useOutsideClick example</h1>

      <Tooltip isOpened={isOpened} triggerRef={buttonRef} onClose={onClose} />
      <button
        ref={buttonRef}
        className="tooltip-trigger"
        onClick={() => {
          console.log('button click');
          setIsOpened((prev) => !prev);
        }}
      >
        Click to open tooltip
      </button>
    </>
  );
}
