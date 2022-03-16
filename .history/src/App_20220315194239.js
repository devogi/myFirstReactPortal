import React, { useState } from "react";
import Modal from "./Modal";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: "1",
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: "2",
  backgroundColor: "red",
  padding: "10px",
};

export default function App() {
 
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button onClick={() => setIsOpen(true)}>Open modal</button>
        <Modal open={isOpen}>Fancy Modal</Modal>
      </div>
      <div style={OTHER_CONTENT_STYLES}>Other content</div>
    </>
  );
}
