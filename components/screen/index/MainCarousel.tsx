// Modules
import React from 'react'

// MUI
import Carousel from 'react-material-ui-carousel'
import { grey, yellow } from '@mui/material/colors'
import { Button, Stack, SxProps, Theme, Typography } from '@mui/material'

// Hooks
import useTraduction from '../../../hooks/useTraductions'

export default function MainCarousel() {
  return (
    <Carousel sx={{ height:'400px' }}>
      <FirstImage/>
    </Carousel>
  )
}

const firstImageStyle:SxProps<Theme> = {
  width:'100%', 
  // backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/main-carousel.jpg?alt=media&token=25076512-b164-47d1-acc0-a9f77cdd5549")',
  // backgroundSize: 'cover',
  backgroundColor:grey[900],
  justifyContent:'center',
  alignItems:'center',
  height:'400px'
}

const yellowTextStyle:SxProps<Theme> = {
  color:yellow[700], 
  textAlign:'center'
}

const whiteTextStyle:SxProps<Theme> = {
  color:'white', 
  textAlign:'center',
  textTransform:'uppercase'
}

function FirstImage () {
  const traduce = useTraduction('index')
  return (
    <Stack sx={firstImageStyle}>
      <Stack sx={{ padding:4, alignItems:'center' }} rowGap={2}>
        <Stack>
          <Typography
            variant='body1'
            sx={yellowTextStyle}
          >{traduce('carousel.yellow-text')}</Typography>
          <Typography
            variant='h5'
            sx={whiteTextStyle}
          >{traduce('carousel.white-text')}</Typography>
        </Stack>
        <Button variant='contained'>{traduce('carousel.blue-button')}</Button>
      </Stack>
    </Stack>
  )
}
