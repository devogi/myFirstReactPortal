import React from "react";

const MODAL_STYLES = {
  position: "fixed",
  top: "%50",
  left: "%50",
  tranform:"translate(-)"
  zIndex: "1000",
  backgroundColor: "#FFF",
  padding: "10px",
};

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
