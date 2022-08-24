// Modules
import React from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';

// Components
import GlobalContainer from '../../components/containers/GlobalContainer';
import PaddingContainer from '../../components/containers/PaddingContainer';

export default function Register () {
  return (
    <GlobalContainer title='Registrarse'>
      <PaddingContainer backgroundColor={grey[200]}>
        <Grid container spacing={4}>
          <Grid item sm={4} sx={{ display:{ xs:'none', sm:'flex' }, flexDirection:'column', justifyContent:'center' }}>
            <img src='/assets/register/main.png'/>
          </Grid>
          <Grid item xs={12} sm={8} sx={{ color:blueGrey[900], flexDirection:'column' }}>
            <Paper sx={{ display:'flex', flexDirection:'column', padding:4, alignItemms:'center', rowGap:2 }}>
              <Typography variant='h5' sx={{ textAlign:'center', color:blueGrey[900] }}>
                <b>Regístrate</b>
              </Typography>
              <TextField label='Número de control'/>
              <TextField label='Nombre completo'/>
              <TextField label='Correo electrónico' type='email'/>
              <TextField label='Carrera / Escuela'/>
              <Button variant='contained'>Registrarse</Button>
            </Paper>
          </Grid>
        </Grid>
      </PaddingContainer>
    </GlobalContainer>
  )
}
