import React, { ReactNode } from "react";

const SpCarDialog: React.FC<{
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  children?: ReactNode;
}> = ({ isOpen = false, onOpen, onClose, children }) => {
  console.log(isOpen);
  if (!isOpen) return null;
  onOpen && onOpen();
  onClose && onClose();
  return (
    <>
      <div>
        SpCarDialog
        {children}
      </div>
    </>
  );
};

export default SpCarDialog;
