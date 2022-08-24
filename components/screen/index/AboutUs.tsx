// Modules
import React from 'react'
import { blueGrey } from '@mui/material/colors'
import { Button, Grid, Stack, Typography } from '@mui/material'

// Containers
import PaddingContainer from '../../containers/PaddingContainer'

// Images
import { images } from '../../../utils/sources'

export default function AboutUs () {
  return (
    <PaddingContainer backgroundColor={blueGrey[900]}>
      <Stack rowGap={2}>
        <Typography variant='h4' color='white'>
          <b>Acerca de nosotros</b>
        </Typography>
        <Grid container spacing={{ xs:4, lg:20 }}>
          <Grid item xs={12} md={6} sx={{ display:'flex', alignItems:'center' }}>
            <img src={images.aboutUs} style={{ width:'100%', borderRadius:5, maxWidth:450 }}/>
          </Grid>
          <Grid 
            item 
            xs={12} 
            md={6} 
            sx={{ display:'flex', alignItems:'center' }}
          >
            <Stack rowGap={2} sx={{ alignItems:'end', color:'white', textAlign:'right' }}>
              <Typography variant='h6'>
                Somos una comunidad formada por estudiantes y catedráticos  de la carrera de Ingeniería en Sistemas Computacionales con el objetivo decompartir conocimiento relacionado con Tecnologías de la Información para carreras afines y el público en general
              </Typography>
              <Button variant='contained' size='large'>Conocer más</Button>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </PaddingContainer>
  )
}
