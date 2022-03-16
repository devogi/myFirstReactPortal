import React, { useState } from "react";

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
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button>Open modal</button>
      </div>
      <div style={OTHER_CONTENT_STYLES}>O</div>
    </>
  );
}

export default App;
