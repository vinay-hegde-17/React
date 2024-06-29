import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function MuiPopup({ initial1Value, initial2Value, onCloseModal, open }) {
  console.log("1"+initial1Value);
  console.log("2"+initial2Value);
  const [textbox1Value, setTextbox1Value] = useState(initial1Value);
  const [textbox2Value, setTextbox2Value] = useState(initial2Value);
  console.log("3"+textbox1Value);
  console.log("4"+textbox2Value);

  useEffect(() => {
    setTextbox1Value(initial1Value);
    setTextbox2Value(initial2Value);
  }, [initial1Value, initial2Value]);

  const handleCloseClick = () => {
    onCloseModal(textbox1Value, textbox2Value);
  };

  return (
    <Modal open={open}>
      <Box sx={style}>
        <button onClick={()=>{handleCloseClick()}} style={{marginLeft:'350px'}}>X</button>
        <div style={{ textAlign: "center" }}>
          <TextField
            id="outlined-basic-1"
            label="Text-Box-1"
            variant="outlined"
            sx={{ marginBottom: 2 }}
            type="text"
            value={textbox1Value}
            onChange={(e) => setTextbox1Value(e.target.value)}
          />
          <TextField
            id="outlined-basic-2"
            label="Text-Box-2"
            variant="outlined"
            value={textbox2Value}
            onChange={(e) => setTextbox2Value(e.target.value)}
          />
        </div>
        <Button
          variant="contained"
          sx={{ marginTop:'20px', marginLeft:'180px' }}
          onClick={handleCloseClick}
        >
          Close Popup
        </Button>
      </Box>
    </Modal>
  );
}

export default MuiPopup;
