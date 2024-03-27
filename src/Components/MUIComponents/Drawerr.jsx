import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { List, ListItem, ListItemButton, Divider, Drawer, ListItemIcon, ListItemText, IconButton, Box, } from '@mui/material';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ModeIcon from '@mui/icons-material/Mode';
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@emotion/react';

export default function Drawerr({ setMyMode, hideDrawer, nonBlk, drawerTaeb }) {
  const getLocation = useLocation()
  const navigate = useNavigate();
  const theme = useTheme();

  const myLest = [
    { text: 'Home', icon: <HomeSharpIcon />, path: '/' },
    { text: 'Create', icon: <ModeIcon />, path: '/create' },
    { text: 'Profile', icon: <Person2Icon />, path: '/profile' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ]

  return (
    <>
      <Box component={'nav'}>
        <Drawer
          variant={drawerTaeb}
          sx={{
            display: { xs: nonBlk, sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { sm: `240px` } },
          }}
          open={true}
          onClose={() => {
            hideDrawer()
          }}
        >
          <List  >
            <ListItem sx={{ display: 'flex', justifyContent: 'center' }} disablePadding>
              <IconButton sx={{ mb: '14px ' }} onClick={() => {
                localStorage.setItem('Mode', theme.palette.mode === "dark" ? "light" : 'dark')
                setMyMode(theme.palette.mode === "light" ? "dark" : "light")
              }} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7 sx={{ color: 'orange' }} /> : <Brightness4 />}
              </IconButton>
            </ListItem>
            <Divider />

            {myLest.map((item) => {
              return (
                <ListItem key={item.text} sx={{ bgcolor: getLocation.pathname === item.path ? theme.palette.faxColor.mane : null }} disablePadding>
                  <ListItemButton onClick={() => { navigate(item.path) }}>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              )
            })}

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>
  )
}
