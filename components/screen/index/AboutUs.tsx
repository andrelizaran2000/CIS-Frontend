// Modules
import React from 'react'

// MUI
import { blueGrey } from '@mui/material/colors'
import { Button, Grid, Stack, Typography } from '@mui/material'

// Containers
import PaddingContainer from '../../containers/PaddingContainer'

// Hooks
import useTraduction from '../../../hooks/useTraductions'

// Images
import { images } from '../../../utils/sources'

export default function AboutUs () {
  const traduce = useTraduction('index')
  return (
    <PaddingContainer backgroundColor={blueGrey[900]}>
      <Stack rowGap={2}>
        <Typography variant='h5' color='white'>{traduce('about-us.title')}</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={5} sx={{ display:'flex', alignItems:'center' }}>
            <img src={images.aboutUs} style={{ width:'100%', borderRadius:5 }}/>
          </Grid>
          <Grid 
            item 
            xs={12} 
            sm={6}
            md={7} 
            sx={{ display:'flex', alignItems:'center' }}
          >
            <Stack 
              rowGap={2} 
              sx={{ alignItems:'center', color:'white', textAlign:'justify' }}
            >
              <Typography variant='body1'>{traduce('about-us.body-1')}</Typography>
              <Typography variant='body1'>{traduce('about-us.body-2')}</Typography>
              <Button variant='contained'>{traduce('about-us.button')}</Button>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </PaddingContainer>
  )
}
