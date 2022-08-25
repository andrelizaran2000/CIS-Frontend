// Modules
import React, { useState } from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';

// Components
import GlobalContainer from '../../components/containers/GlobalContainer';
import PaddingContainer from '../../components/containers/PaddingContainer';

const initialState = {
  controlNumber:'',
  name:'',
  email:'',
  school:''
}

export default function Register () {

  const [ formValues, setFormValues ] = useState(initialState);
  const { controlNumber, email, name, school } = formValues;

  function validateForm () {
    if (!email || !name || !school) {
      alert('Es necesario ingresar todos los datos del formulario');
      return false;
    } else return true;
  }

  function submitRegister () {
    if (!validateForm()) return;
  }

  function handleForm (name:string, value:string) {
    setFormValues({ ...formValues, [name]:value });
  }

  return (
    <GlobalContainer title='Registrarse'>
      <PaddingContainer backgroundColor={grey[200]}>
        <Grid container spacing={4}>
          <Grid item sm={4} sx={{ display:{ xs:'none', sm:'flex' }, flexDirection:'column', justifyContent:'center' }}>
            <img src='/assets/register/main.png'/>
          </Grid>
          <Grid item xs={12} sm={8} sx={{ color:blueGrey[900], flexDirection:'column' }}>
            <form onSubmit={(e) => { e.preventDefault(); submitRegister() }} style={{ display:'flex', flexDirection:'row' }}>
              <Paper sx={{ display:'flex', flexDirection:'column', padding:4, alignItemms:'center', rowGap:2 }}>
                <Typography variant='h5' sx={{ textAlign:'center', color:blueGrey[900] }}>
                  <b>Regístrate</b>
                </Typography>
                <TextField
                  label='Número de control'
                  onChange={(e) => handleForm(e.target.name, e.target.value)}
                  name='controlNumber'
                />
                <TextField
                  label='Nombre completo'
                  onChange={(e) => handleForm(e.target.name, e.target.value)}
                  name='name'
                />
                <TextField
                  label='Correo electrónico' type='email'
                  onChange={(e) => handleForm(e.target.name, e.target.value)}
                  name='email'
                />
                <TextField
                  label='Carrera / Escuela'
                  onChange={(e) => handleForm(e.target.name, e.target.value)}
                  name='school'
                />
                <Button variant='contained'>Registrarse</Button>
              </Paper>
            </form>
          </Grid>
        </Grid>
      </PaddingContainer>
    </GlobalContainer>
  )
}
