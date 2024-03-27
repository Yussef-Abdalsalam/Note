import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Appbar from '../MUIComponents/Appbar';
import Drawerr from '../MUIComponents/Drawerr';
import { Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';


export default function Root() {
  const [mode, setMyMode] = useState(localStorage.getItem('Mode') ? localStorage.getItem('Mode') : "dark")
  const [nonBlk, setNonBlk] = useState('none')
  const [drawerTaeb, setDrawerTaeb] = useState('permanent')


  const showDrawer = () => {
    setDrawerTaeb("temporary")
    setNonBlk('block')
  }

  const hideDrawer = () => {
    setNonBlk('none')
    setDrawerTaeb("permanent")
  }

  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          // palette values for light mode
          faxColor: {
            mane: grey[300]
          }
        }
        : {
          // palette values for dark mode
          faxColor: {
            mane: grey[800]
          }
        }),
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <Appbar {...{showDrawer}} />
          <Drawerr {...{nonBlk, hideDrawer, setMyMode, drawerTaeb}}  />
          <Box component={'main'} sx={{ width: { sm: `calc( 100% - 240px)` }, ml: {sm:'240px'}, overflow: 'hidden', display: 'flex', justifyContent: 'center', mt: '66px' }}>
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}