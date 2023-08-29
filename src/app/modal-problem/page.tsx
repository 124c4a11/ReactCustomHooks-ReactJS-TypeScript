'use client';

import ReactDOM from 'react-dom';
import { useLayoutEffect, useRef, useState } from 'react';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { getModalRoot } from '@/utils/getModalRoot';

interface ModalProps {
  opened: boolean;
  onClose: () => void;
}

function ButtonWithDropdown() {
  const [isOpened, setIsOpened] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  const dropDownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useOutsideClick({
    elementRef: dropDownRef,
    triggerRef: buttonRef,
    onOutsideClick: () => setIsOpened(false),
  });

  useLayoutEffect(() => {
    if (!isOpened || !buttonRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();

    setPosition({
      top: buttonRect.top + buttonRect.height,
      left: buttonRect.left,
      width: buttonRect.width,
    });
  }, [isOpened]);

  return (
    <>
      <button ref={buttonRef} onClick={() => setIsOpened(true)}>
        Open Dropdown
      </button>
      {isOpened &&
        ReactDOM.createPortal(
          <div
            ref={dropDownRef}
            style={{
              position: 'absolute',
              ...position,
              padding: 12,
              borderRadius: 8,
              color: 'white',
              background: '#212121',
            }}
          >
            <div>A</div>
            <div>B</div>
          </div>,
          getModalRoot()
        )}
    </>
  );
}

function Modal({ opened, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    elementRef: modalRef,
    onOutsideClick: onClose,
  });

  if (!opened) return null;

  return ReactDOM.createPortal(
    <div
      ref={modalRef}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate3d(-50%, -50%, 0)',
        width: 400,
        height: 300,
        background: '#515151',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ButtonWithDropdown />
    </div>,
    getModalRoot()
  );
}

export default function ModalProblemPage() {
  const [isOpened, setIsOpened] = useState(false);

  const onClose = () => setIsOpened(false);

  return (
    <>
      <h1>Modal problem</h1>
      <p>Click on dropdown list item!</p>

      <Modal opened={isOpened} onClose={onClose} />

      <button
        onClick={() => {
          setIsOpened((v) => !v);
        }}
      >
        Click to open modal
      </button>
    </>
  );
}
