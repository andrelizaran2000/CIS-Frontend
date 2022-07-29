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
        <Typography variant='h4' color='white'>
          <b>{traduce('about-us.title')}</b>
        </Typography>
        <Grid container spacing={{ xs:4, lg:20 }}>
          <Grid item xs={12} md={5} sx={{ display:'flex', alignItems:'center' }}>
            <img src={images.aboutUs} style={{ width:'100%', borderRadius:5, maxWidth:450 }}/>
          </Grid>
          <Grid 
            item 
            xs={12} 
            md={7} 
            sx={{ display:'flex', alignItems:'center' }}
          >
            <Stack 
              rowGap={2} 
              sx={{ alignItems:'end', color:'white', textAlign:'right' }}
            >
              <Typography variant='h6'>
                {traduce('about-us.body-1')}
              </Typography>
              <Button variant='contained' size='large'>{traduce('about-us.button')}</Button>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </PaddingContainer>
  )
}
