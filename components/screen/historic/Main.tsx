// Modules
import React from 'react'
import { Stack, Typography } from '@mui/material'

const containerStyle = {
  padding:4, 
  alignItems:'center', 
  justifyContent:'center', 
  height:'400px',
  backgroundImage:'url("assets/historic/main-historic.png")',
  color:'white',
  textAlign:'center'
}

export default function Main () {
  return (
    <Stack sx={containerStyle} rowGap={2}>
      <Typography variant='h3' sx={{ textAlign:'center', fontWeight:'bold' }}>HISTORIAL</Typography>
      <Typography variant='h5' sx={subtitleStyle}>DE EVENTOS</Typography>
    </Stack>
  )
}

const subtitleStyle = {
  width:{ xs:'100%', sm:'80%', md:'60%', lg:'50%' },
  fontWeight:'bold'
}