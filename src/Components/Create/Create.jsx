import { Box, Button, InputAdornment, TextField, styled } from '@mui/material';
import React, { useState } from 'react';
import { purple } from '@mui/material/colors';
import {  KeyboardArrowRight } from '@mui/icons-material';




export default function Create() {

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

  return (
    <Box sx={{ width: '380px' }} component={"form"}>

      <TextField
      autoComplete="off"
      onChange={(eo)=>{
        setTitle(eo.target.value)
      }}
        fullWidth
        label="Transaction Title"
        sx={{ mt: '22px', display: 'block' }}
        InputProps={{
          startAdornment: <InputAdornment position="start">&#128073;</InputAdornment>,
        }}
        variant="filled"
      />

      <TextField
      autoComplete="off"
      onChange={(eo)=>{
        setPrice(Number(eo.target.value))
      }}
        fullWidth
        label=" Amount"
        sx={{ mt: '22px',  display: 'block' }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <ColorButton onClick={() => { 
        fetch('http://localhost:3000/myData',{
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({title,price})
        })
       }} sx={{mt:'22px'}} variant="contained">Submit <KeyboardArrowRight /> </ColorButton>

    </Box>
  )
}
