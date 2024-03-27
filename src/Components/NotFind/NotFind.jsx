import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

export default function NotFind() {
  const theme = useTheme()
  return (
    <Box>
      <Typography variant="h5" color={theme.palette.error.main}>
        There is no design yet
        <br />
        <br />
        Please try again later..
      </Typography>
    </Box>
  )
}

