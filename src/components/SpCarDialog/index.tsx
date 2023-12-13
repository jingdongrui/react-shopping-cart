import React, { ReactNode } from "react";

const SpCarDialog: React.FC<{
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  children?: ReactNode;
}> = ({ isOpen = false, onOpen, onClose, children }) => {
  if (!isOpen) return null;
  const currentNode = document.getElementsByClassName("sp-cart-dialog")
//   const parentCurrnet = currentNode.p
  onOpen && onOpen();
  onClose && onClose();
  return (
    <>
      <div className="sp-cart-dialog">
        SpCarDialog
        {children}
      </div>
    </>
  );
};

export default SpCarDialog;
