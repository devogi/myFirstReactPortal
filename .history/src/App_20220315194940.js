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
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
     <button onClick={() => setIsOpen(true) } >Open M</button> 
    </div>
  )
}

export default App
