import { ReactNode } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;

  ariaLabel: string;
  ariaLabelledby?: string;
  ariaDescribedby?: string;

  className?: string;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}
