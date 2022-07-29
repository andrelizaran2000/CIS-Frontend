// Modules
import React from 'react'

// MUI
import { blueGrey } from '@mui/material/colors'
import { Stack, Typography } from '@mui/material'

// Traductions
import useTraduction from '../../../hooks/useTraductions'

// Styles
import { titleStyle } from './AboutUs'

const containerStyle = {
  padding:4, 
  alignItems:'center', 
  justifyContent:'center', 
  height:'400px',
  backgroundImage:'url("assets/about-us/about-us-main-bg.png")',
  color:'white',
  textAlign:'center'
}

export default function Main () {
  const traduce = useTraduction('aboutUs')
  return (
    <Stack sx={containerStyle} rowGap={2}>
      <Typography variant='h3' sx={titleStyle}>{traduce('main.title')}</Typography>
      <Typography 
        variant='h5'
        sx={{ width:{ xs:'100%', sm:'80%', md:'60%', lg:'50%' }}}
      >{traduce('main.body')}</Typography>
    </Stack>
  )
}
