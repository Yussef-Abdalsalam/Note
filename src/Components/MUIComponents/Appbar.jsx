import React from 'react'
import { Avatar, IconButton, Link, Typography, AppBar, Toolbar, Box } from '@mui/material';
import img1 from '../../images/1.jpg';
import { useNavigate } from 'react-router-dom';
import { Menu } from '@mui/icons-material';

export default function Appbar({showDrawer}) {
  const navigate = useNavigate();
  return (
    <>
      <AppBar sx={{ width: { sm: `calc( 100% - 240px)` }, ml: { xs: '0px', sm: '240px' } }} position="static">
        <Toolbar>
          <IconButton onClick={()=>{
            showDrawer()
          }} sx={{ display: { xs: 'block', sm: 'none' } , mr:'9px' }}>
            <Menu />
          </IconButton>

          <Box sx={{flexGrow: 1}}>
            <Link onClick={() => { navigate("/") }} underline="none" color={'inherit'} sx={{  "&:hover": { fontSize: "16.5px" }, cursor: "pointer" }}  > My expenses</Link>
          </Box>


          <Typography sx={{ mx: 1, color: "inherit" }} >Yussef Abdalsalam</Typography>
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Yussef Abdalsalam" src={img1} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}
