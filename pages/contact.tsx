// Modules
import React from 'react';
import { blueGrey } from '@mui/material/colors';
import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material';

// Components
import GlobalContainer from '../components/containers/GlobalContainer'
import PaddingContainer from '../components/containers/PaddingContainer'

export default function contact() {
  return (
    <GlobalContainer title='Contacto'>
      <PaddingContainer>
        <Typography variant='h4' color={blueGrey[900]} textAlign='center' mb={4}>
          <b>Contáctanos</b>
        </Typography>
        <Grid container spacing={{ xs:4, lg:20 }}>
          <Grid item xs={0} md={6} sx={{ display:{ xs:'none', md:'flex' }, alignItems:'end', flexDirection:'center', justifyContent:'center' }}>
            <img src='/assets/contact/contact-img.png' style={{ maxWidth:300 }}/>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display:'flex', flexDirection:'column' }}>
            <Paper>
              <Stack rowGap={2} padding={3}>
                <Typography variant='h6'>Anota tus datos para mandar un correo</Typography>
                <TextField
                  label='Nombre'
                  variant='filled'
                  type='text'
                />
                <TextField
                  label='Email'
                  variant='filled'
                  type='email'
                />
                <TextField
                  label='Asunto'
                  variant='filled'
                  type='text'
                />
                <TextField
                  label='Mensaje o comentario'
                  variant='filled'
                  type='text'
                  rows={4}
                />
                <Button variant='contained'>Mandar</Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </PaddingContainer>
    </GlobalContainer>
  )
}
