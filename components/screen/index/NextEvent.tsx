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
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} sx={{ alignItems:'center', display:'flex' }}>
          <Stack alignItems='start' rowGap={2}>
          <Typography variant='h4' color={blueGrey[900]}>
            <b>{traduce('next-event.title')}</b>
          </Typography>
            <Typography variant='h6' sx={{ color:blueGrey[900] }}>{body}</Typography>
            <Button variant='contained' size='large'>Saber más</Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display:'flex', alignItems:'end', justifyContent:'end' }}>
          <img src={images.nextEvent} style={{ width:'100%', maxWidth:450 }}/>
        </Grid>
      </Grid>
    </PaddingContainer>
  )
}

const body = 'Conoce mas acerca del camino hacia al exito de Oliver Barrera egresado del Tecnologico de Veracruz'