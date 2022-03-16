import React from "react";

const MODAL_STYLES = {
  position: "fixed",
  
  zIndex: "1000",
  backgroundColor: "#FFF",
  padding: "10px",
}

function Modal(open, children, onClose) {
  if (!open) return null;
  return (
    <div>
      <button onClick={onClose}>Close Modal </button>
      {children}
    </div>
  );
}

export default Modal;
