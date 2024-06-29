import React, { useState } from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import { v4 as uuidv4 } from 'uuid'; 

function AddText() {
    const[text,setText]=useState()
    const[list,setList]=useState([])
    const getValList=()=>{
        const newItem={
            id:uuidv4(),
            item:text,
            done:flase
        }
        setList([...list,newItem])
    }
console.log('List value '+list);
  return (
    <div>
      <Box
        sx={{m: 5, p: 8, width: "70ch", border: "2px solid black"}}>
        <div style={{ textAlign: "center"}}>
          <TextField
            label="Text-Box-1"
            variant="outlined"
            sx={{ marginBottom: 2 }}
            type="text"
            value={text}
            onChange={(e)=>{setText(e.target.value)}}
          />
      <Button variant="contained" style={{margin:"10px"}} endIcon={<SendIcon />} onClick={getValList}>
        Send
      </Button>
          </div>
          </Box>
    </div>
  )
}

export default AddText
