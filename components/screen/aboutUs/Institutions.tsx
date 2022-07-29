// Modules
import React from 'react';
import { blueGrey } from '@mui/material/colors';
import { Grid, Stack, Typography } from '@mui/material';

// Hooks
import useTraduction from '../../../hooks/useTraductions';

// Containers
import PaddingContainer from '../../containers/PaddingContainer';

// Styles
import { titleStyle } from './AboutUs'

export default function institutions() {
  const traduce = useTraduction('aboutUs')
  return (
    <PaddingContainer>
      <Stack rowGap={4}>
        <Typography sx={{ ...titleStyle, color:blueGrey[900] }} variant='h3'>{traduce('institutions.title')}</Typography>
        <Grid container spacing={4}>
          {institutionLogos.map((logo, key) => (
            <Grid item xs={4} sm={3} md={2} key={key} sx={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
              <img src={logo} style={{ width:'90%', maxWidth:120 }} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </PaddingContainer>
  )
}

const institutionLogos = [
  '/assets/institutions/inst1.png',
  '/assets/institutions/inst2.png',
  '/assets/institutions/inst3.png',
  '/assets/institutions/inst4.png',
  '/assets/institutions/inst5.png',
  '/assets/institutions/inst6.png',
  '/assets/institutions/inst7.png',
  '/assets/institutions/inst8.png',
]