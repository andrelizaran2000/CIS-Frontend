// Module
import React from 'react';
import { blueGrey, grey } from '@mui/material/colors';
import { Box, Grid, Stack, Typography } from '@mui/material';

// Hooks
import useTraduction from '../../../hooks/useTraductions';

// Components
import PaddingContainer from '../../containers/PaddingContainer';

export const centerInGridItem = {
  display:'flex', 
  alignItems:'center',
  color:'white',
  justifyContent:'center'
}

export default function MisionVision() {
  const traduce = useTraduction('aboutUs')
  return (
    <>
      <PaddingContainer backgroundColor={blueGrey[800]}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} sx={centerInGridItem}>
            <Box sx={{ width:{ xs:'80%', lg:'60%', xl:'40%' }}}>
              <img src='/assets/mision-vision/misvis1.png' style={{ width:'100%' }}/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={centerInGridItem}>
            <Stack rowGap={2}>
              <Typography variant='h4'>Misión</Typography>
              <Typography variant='h6'>{traduce("mision-vision.mision")}</Typography>
            </Stack>
          </Grid>
        </Grid>
      </PaddingContainer>
      <PaddingContainer backgroundColor={grey[200]}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} sx={centerInGridItem}>
            <Box sx={{ width:{ xs:'80%', lg:'60%', xl:'40%' }}}>
              <img src='/assets/mision-vision/misvis2.png' style={{ width:'100%' }}/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={centerInGridItem}>
            <Stack rowGap={2}>
              <Typography color={blueGrey[900]} variant='h4'>Visión</Typography>
              <Typography color={blueGrey[900]} variant='h6'>{traduce("mision-vision.vision")}</Typography>
            </Stack>
          </Grid>
        </Grid>
      </PaddingContainer>
    </>   
  )
}
