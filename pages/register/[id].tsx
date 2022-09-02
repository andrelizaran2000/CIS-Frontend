// Modules
import React, { useState } from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';

// Components
import GlobalContainer from '../../components/containers/GlobalContainer';
import PaddingContainer from '../../components/containers/PaddingContainer';
import { RegisterSubeventData } from '../../types/general';
import useAllRequests from '../../queries/useAllRequests';
import { useRouter } from 'next/router';

const initialState:RegisterSubeventData = {
  controlNumber:'',
  name:'',
  email:'',
  school:1,
  career:1,
  id:0
}

export default function Register () {

  const router = useRouter()
  const { id } = router.query;
  const [ formValues, setFormValues ] = useState(initialState);
  const { email, name, controlNumber } = formValues;
  const { useSubmitRegisterSubeventMutation } = useAllRequests();
  const { mutate, isLoading } = useSubmitRegisterSubeventMutation(onSuccess);

  function validateForm () {
    if (!email || !name || !controlNumber) {
      alert('Es necesario ingresar todos los datos del formulario');
      return false;
    } else return true;
  }

  function submitRegister () {
    if (!validateForm()) return;
    mutate({ ...formValues, id:Number(id) });
  }

  function handleForm (name:string, value:string) {
    setFormValues({ ...formValues, [name]:value });
  }

  function onSuccess () {
    setFormValues(initialState);
    router.push('/events');
  }

  return (
    <GlobalContainer title='Registrarse'>
      <PaddingContainer backgroundColor={grey[200]}>
        <Grid container spacing={4}>
          <Grid item sm={4} sx={{ display:{ xs:'none', sm:'flex' }, flexDirection:'column', justifyContent:'center' }}>
            <img src='/assets/register/main.png'/>
          </Grid>
          <Grid item xs={12} sm={8} sx={{ color:blueGrey[900], flexDirection:'column' }}>
            <form onSubmit={(e) => { e.preventDefault(); submitRegister() }} style={{ display:'flex', flexDirection:'column' }}>
              <Paper sx={{ display:'flex', flexDirection:'column', padding:4, alignItemms:'center', rowGap:2 }}>
                <Typography variant='h5' sx={{ textAlign:'center', color:blueGrey[900] }}>
                  <b>Regístrate</b>
                </Typography>
                <TextField
                  label='Número de control'
                  onChange={(e) => handleForm(e.target.name, e.target.value)}
                  name='controlNumber'
                  disabled={isLoading}
                  value={controlNumber}
                />
                <TextField
                  label='Nombre completo'
                  onChange={(e) => handleForm(e.target.name, e.target.value)}
                  name='name'
                  disabled={isLoading}
                  value={name}
                />
                <TextField
                  label='Correo electrónico' type='email'
                  onChange={(e) => handleForm(e.target.name, e.target.value)}
                  name='email'
                  disabled={isLoading}
                  value={email}
                />
                {/* <TextField
                  label='Carrera / Escuela'
                  onChange={(e) => handleForm(e.target.name, e.target.value)}
                  name='school'
                  disabled={isLoading}
                  value={}
                /> */}
                <Button variant='contained' type='submit'>Registrarse</Button>
              </Paper>
            </form>
          </Grid>
        </Grid>
      </PaddingContainer>
    </GlobalContainer>
  )
}
