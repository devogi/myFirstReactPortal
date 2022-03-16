import React from "react";

function Modal(open, children, onClose) {
  if (!open) return nul
  return(
    <div>
      {children}
    </div>
  )
}

export default Modal;
