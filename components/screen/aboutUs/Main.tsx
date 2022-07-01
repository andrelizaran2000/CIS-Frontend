// Modules
import React from 'react'

// MUI
import { blueGrey } from '@mui/material/colors'
import { Box, Stack, SxProps, Theme, Typography } from '@mui/material'

// Traductions
import useTraduction from '../../../hooks/useTraductions'

const containerStyle:SxProps<Theme> = {
  padding:4, 
  alignItems:'center', 
  justifyContent:'center', 
  height:'400px',
  backgroundColor:blueGrey[900],
  color:'white',
  textAlign:'center'
}

export default function Main () {
  const traduce = useTraduction('aboutUs')
  return (
    <Stack sx={containerStyle} rowGap={2}>
      <Typography variant='h4'>{traduce('main.title')}</Typography>
      <Typography 
        variant='h6'
        sx={{ width:{ xs:'100%', sm:'80%', md:'60%', lg:'50%' }}}
      >{traduce('main.body')}</Typography>
    </Stack>
  )
}
