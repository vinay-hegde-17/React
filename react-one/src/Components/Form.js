import React, { useState } from 'react';
import Popup from '../Components/Popup';
import '../Components/Form.css';

function Form() {
  const [textbox1Value, setTextbox1Value] = useState('');
  const [textbox2Value, setTextbox2Value] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (newTextbox1Value, newTextbox2Value) => {
    setTextbox1Value(newTextbox1Value);
    console.log(newTextbox1Value);
    setTextbox2Value(newTextbox2Value);
    setIsModalOpen(false);
  };

  return (
    <div className="form-container">
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
      <button id = 'form-btn' onClick={handleOpenModal} className="modal-button">Open Popup</button>
      {isModalOpen && (
        <Popup
          initial1Value={textbox1Value}
          initial2Value={textbox2Value}
          onCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}

export default Form;
