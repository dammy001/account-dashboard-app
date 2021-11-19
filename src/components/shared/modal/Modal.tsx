import {
  ReactNode,
  useState,
  forwardRef,
  useImperativeHandle,
  Ref,
  ForwardRefExoticComponent,
  RefAttributes,
  ForwardedRef,
} from 'react';
import { useEventListener } from '../../../hooks/useEventListener';

export type ModalPropType = {
  children?: ReactNode;
  customClass?: string;
  close?: (e?: any) => void;
  isDismisable?: boolean;
};

export const Modal: ForwardRefExoticComponent<
  ModalPropType & RefAttributes<Ref<HTMLDivElement | null>>
> = forwardRef<Ref<HTMLDivElement | null>, ModalPropType>(
  (
    { children, customClass, isDismisable, close }: ModalPropType,
    ref: ForwardedRef<any>
  ) => {
    const [isOpen, setOpen] = useState<boolean>(false);

    const closeModal = (event: any) => {
      if (
        event.target.matches('.modal') ||
        (event.charCode || event.keyCode) === 27
      ) {
        if (isDismisable) {
          close && close();
        }
      }
    };

    useImperativeHandle(ref, () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
    }));

    useEventListener(document.body, 'keydown', closeModal);

    return (
      <div className={`modal ${isOpen && 'open'}`} onClick={closeModal}>
        <div className={`modal-content ${customClass}`}>
          {isDismisable && (
            <div className="modal-close" onClick={() => close && close()}>
              <div className="text-white text-lg">X</div>
            </div>
          )}
          {children}
        </div>
      </div>
    );
  }
);
