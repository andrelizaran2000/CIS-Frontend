// Modules
import React from 'react'

// MUI
import { blueGrey } from '@mui/material/colors'
import { Button, Grid, Stack, Typography } from '@mui/material'

// Hooks
import useTraduction from '../../../hooks/useTraductions'

// Containers
import PaddingContainer from '../../containers/PaddingContainer'

// Images
import { images } from '../../../utils/sources'

export default function NextEvent () {
  const traduce = useTraduction('index')
  return (
    <PaddingContainer>
      <Stack rowGap={2}>
        <Typography variant='h5' color={blueGrey[900]}>{traduce('next-event.title')}</Typography>
        <Grid container spacing={{ xs:2, sm:4 }}>
          <Grid item xs={12} sm={6} sx={{ alignItems:'center', display:'flex' }}>
            <Stack alignItems='center' rowGap={2}>
              <Typography variant='h6' textAlign='center' sx={{ color:blueGrey[900] }}>{body}</Typography>
              <Button variant='contained'>Saber más</Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={images.nextEvent} style={{ width:'100%' }}/>
          </Grid>
        </Grid>
      </Stack>
    </PaddingContainer>
  )
}

const body = 'Conoce mas acerca del camino hacia al exito de Oliver Barrera egresado del Tecnologico de Veracruz'