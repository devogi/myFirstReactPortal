import React from "react";
im

const MODAL_STYLES = {
  position: "fixed",
  top: "%50",
  left: "%50",
  tranform: "translate(-50%, -50%)",
  zIndex: 1000,
  backgroundColor: "#FFF",
  padding: "50px",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0, .7)  ",
  zIndex: 1000
};

export default function Modal({ children, open, onClose }) {
  if (!open) return null;

  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>
  );
}
