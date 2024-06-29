import React, { useState } from 'react';
import '../Components/Popup.css';

function Popup({ initial1Value, initial2Value, onCloseModal }) {
  console.log(initial1Value);
  console.log(initial2Value);
    const [textbox1Value, setTextbox1Value] = useState(initial1Value);
    const [textbox2Value, setTextbox2Value] = useState(initial2Value);
  
    const handleCloseClick = () => {
      onCloseModal(textbox1Value, textbox2Value);
    };
  
    return (
      <div className="popup-container">
        <div className="popup-content">
          <input
            type="text"
            value={textbox1Value}
            onChange={(e) => setTextbox1Value(e.target.value)}
            className="text-input"
          />
          <input
            type="text"
            value={textbox2Value}
            onChange={(e) => setTextbox2Value(e.target.value)}
            className="text-input"
          />
          <button id = "pop-up" onClick={handleCloseClick} className="close-modal-button">Close Popup</button>
        </div>
      </div>
    );
  }
  
  export default Popup;