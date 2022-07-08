// Module
import React from 'react'

// MUI
import { Box, Grid, Stack, Typography } from '@mui/material'

// Hooks
import useTraduction from '../../../hooks/useTraductions'
import PaddingContainer from '../../containers/PaddingContainer'

export const centerInGridItem = {
  display:'flex', 
  alignItems:'center'
}

export default function MisionVision() {
  const traduce = useTraduction('aboutUs')
  return (
    <PaddingContainer>
      <Stack rowGap={4}>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} sx={centerInGridItem}>
            <Box sx={{ width:{ xs:'100%', sm:'80%', lg:'60%' }}}>
              <img src='/assets/mision-vision/misvis1.png' style={{ width:'100%' }}/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={centerInGridItem}>
            <Stack rowGap={2}>
              <Typography variant='h4'>Misión</Typography>
              <Typography>{traduce("mision-vision.mision")}</Typography>
            </Stack>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} sx={centerInGridItem}>
            <Box sx={{ width:{ xs:'100%', sm:'80%', lg:'60%' }}}>
              <img src='/assets/mision-vision/misvis2.png' style={{ width:'100%' }}/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={centerInGridItem}>
            <Stack rowGap={2}>
              <Typography variant='h4'>Visión</Typography>
              <Typography>{traduce("mision-vision.vision")}</Typography>
            </Stack>
          </Grid>
        </Grid>

      </Stack>
    </PaddingContainer>    
  )
}
