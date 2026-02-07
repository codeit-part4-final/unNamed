export interface DomainModalCloseOptions {
  overlayClick?: boolean;
  escape?: boolean;
}

export interface BaseDomainModalProps {
  isOpen: boolean;
  onClose: () => void;
  closeOptions?: DomainModalCloseOptions;
}
