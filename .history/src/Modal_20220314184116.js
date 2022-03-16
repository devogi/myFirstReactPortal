import React from "react";

const MODAL_STYLES = {
  position: "",
  zIndex: "2",
  backgroundColor: "red",
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
