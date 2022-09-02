// Modules
import React from 'react';

// MUI
import Carousel from 'react-material-ui-carousel';
import { yellow } from '@mui/material/colors';
import { Button, Stack, Typography } from '@mui/material';

// Hooks
import useTraduction from '../../../hooks/useTraductions';
import { useRouter } from 'next/router';

export default function MainCarousel() {
  return (
    <Carousel sx={{ height:'500px' }}>
      <FirstImage/>
    </Carousel>
  )
}

const firstImageStyle = {
  width:'100%', 
  backgroundImage: `url("assets/index/index-main-bg.png")`,
  backgroundSize: 'cover',
  justifyContent:'center',
  alignItems:'center',
  height:500
}

const yellowTextStyle = {
  color:yellow[700], 
  textAlign:'center'
}

const whiteTextStyle = {
  color:'white', 
  textAlign:'center',
  textTransform:'uppercase'
}

function FirstImage () {
  const traduce = useTraduction('index');
  const router = useRouter();
  return (
    <Stack sx={firstImageStyle}>
      <Stack sx={{ padding:4, alignItems:'center' }} rowGap={2}>
        <Stack>
          <Typography
            variant='h6'
            sx={yellowTextStyle}
            mb={1}
          >{traduce('carousel.yellow-text')}</Typography>
          <Typography
            variant='h4'
            sx={whiteTextStyle}
          >{traduce('carousel.white-text')}</Typography>
        </Stack>
        <Button 
          variant='contained' 
          size='large'
          onClick={() => router.push('/events')}
        >{traduce('carousel.blue-button')}</Button>
      </Stack>
    </Stack>
  )
}
