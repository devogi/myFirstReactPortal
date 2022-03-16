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

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button>Open modal</button>

        <Modal
        >Fancy Modal</Modal>
      </div>
      <div style={OTHER_CONTENT_STYLES}>Other content</div>
    </>
  );
}

export default App;
