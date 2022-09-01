// Modules
import React from 'react';

// MUI
import { blueGrey } from '@mui/material/colors';
import { Button, Grid, Stack, Typography } from '@mui/material';

// Container
import PaddingContainer from '../../containers/PaddingContainer';

// Types
import { NewData } from '../../../types/general';

export default function MainNew (newData:NewData) {

  const { title, description, coverPhoto, link } = newData;

  return (
    <PaddingContainer backgroundColor={blueGrey[900]}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={7} xl={6} sx={{ alignItems:'center', justifyContent:'center', display:'flex' }}>
          <img src={coverPhoto} style={{ width:'100%' }}/>
        </Grid>
        <Grid item xs={12} md={6} lg={5} xl={6} sx={{ color:'white', alignItems:'center', justifyContent:'center', display:'flex' }}>
          <Stack rowGap={2}>
            <Typography variant='h4'>{title}</Typography>
            <Typography>{description}</Typography>
            <Button variant='contained' sx={{ alignSelf:'flex-start' }}>
              <a href={link} style={{ color:'white' }}>Visitar sitio</a>
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </PaddingContainer>
  )
}