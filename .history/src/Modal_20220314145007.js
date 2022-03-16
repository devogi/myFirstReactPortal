import React from "react";

function Modal(open, children, onClose) {
  if (!open) return null
  return(
    <div>
      {children}
    </div>
  )
}

export default Modal;
