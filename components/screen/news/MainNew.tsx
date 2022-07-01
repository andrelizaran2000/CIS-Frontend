// Modules
import React from 'react'

// MUI
import { blueGrey } from '@mui/material/colors'
import { Grid, Stack, Typography } from '@mui/material'

// Container
import PaddingContainer from '../../containers/PaddingContainer'

export default function MainNew() {
  return (
    <PaddingContainer backgroundColor={blueGrey[900]}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={7} xl={6} sx={{ alignItems:'center', justifyContent:'center', display:'flex' }}>
          <img src={source} style={{ width:'100%' }}/>
        </Grid>
        <Grid item xs={12} md={6} lg={5} xl={6} sx={{ color:'white', alignItems:'center', justifyContent:'center', display:'flex' }}>
          <Stack rowGap={2}>
            <Typography variant='h5'>{title}</Typography>
            <Typography>{subtitle}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </PaddingContainer>
  )
}

const title = 'Los grandes modelos de IA han disparado el consumo de potencia informática'
const subtitle = 'Históricamente, la potencia computacional requerida para entrenar sistemas de inteligencia artificial se duplicaba cada dos años, pero ahora lo hace cada 3,4 meses, siete veces más rápido, una tendencia que no hace más que aumentar la brecha de capacidades entre investigadores públicos y privados.'
const source = 'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Rectangle%2049.png?alt=media&token=856d5760-90ca-4f86-bac8-60251b35c319'