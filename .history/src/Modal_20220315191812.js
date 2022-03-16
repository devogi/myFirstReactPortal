import React from "react";

const MODAL_STYLES = {
  position: "fixed",
  top: "%50",
  left: "%50",
  tranform: "translate(-50%, -50%)",
  zIndex: 1000,
  backgroundColor: "#FFF",
  padding: "50px",
};

function Modal(open, children, onClose) {
  if (!open) return null;
  return (
    <div style={MODAL_STYLES}>
      <button onClick={onClose}>Close Modal </button> 
      {children}
    </div>
  );
}

export default Modal;
