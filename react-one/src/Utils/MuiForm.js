import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MuiPopup from "./MuiPopup";

function MuiForm() {
  const [textbox1Value, setTextbox1Value] = useState("");
  const [textbox2Value, setTextbox2Value] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (newTextbox1Value, newTextbox2Value) => {
    setTextbox1Value(newTextbox1Value);
    setTextbox2Value(newTextbox2Value);
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          m: 5,
          p: 8,
          width: "25ch",
          border: "2px solid black",
        }}
      >
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
        <Button
          variant="contained"
          sx={{ marginTop: '20px', marginLeft:"80px",}}
          onClick={handleOpenModal}
        >
          Open Popup
        </Button>
        </div>
        
        <MuiPopup
          initial1Value={textbox1Value}
          initial2Value={textbox2Value}
          onCloseModal={handleCloseModal}
          open={isModalOpen}
        />
      </Box>
    </div>
  );
}

export default MuiForm;
