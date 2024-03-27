import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Close from '@mui/icons-material/Close';
import { Box } from '@mui/material';
export default function Home() {
  const [mydata, setmydata] = useState([])
  let totalPrice = 0;

  useEffect(() => {
    fetch("http://localhost:3000/myData")
      .then((response) => response.json())
      .then((data) => setmydata(data))
  }, [])

  function hndelDlet(ietm) {
    fetch(`http://localhost:3000/myData/${ietm.id}`, { method: "DELETE" })
    const newArr = mydata.filter((myObject) => {
      return myObject.id !== ietm.id
    })
    setmydata(newArr)
  }

  return (
    <>
      <Box>
        {mydata.map((ietm) => {
          totalPrice += ietm.price;
          return (
            <Paper key={ietm.id} elevation={1} sx={{ mt: '22px', mb: '3px', pt: '27px', pb: '7px', width: '366px', display: 'flex', justifyContent: 'space-between', position: 'relative' }} >
              <Typography sx={{ ml: '16px', fontSize: '1.3em', }} variant="h6" >{ietm.title}</Typography>
              <Typography sx={{ mr: '33px', fontSize: '1.4em', fontWeight: '500', opacity: '0.8' }} variant="body1" >{ietm.price}$</Typography>

              <IconButton onClick={() => { hndelDlet(ietm)}}
               sx={{ position: 'absolute', top: '0', right: '0' }}>
                <Close sx={{ fontSize: '20px' }} />
              </IconButton>
            </Paper>
       ) })}

        <Typography sx={{ textAlign: 'center', mt: '50px' }} variant="h6" >
          &#128073; You Spend ${totalPrice}
        </Typography>

      </Box>
    </>
  )
}
