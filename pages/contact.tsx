// Modules
import React, { useState } from 'react';
import { blueGrey } from '@mui/material/colors';
import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material';

// Components
import GlobalContainer from '../components/containers/GlobalContainer';
import PaddingContainer from '../components/containers/PaddingContainer';

// Consts
import { iconButtons } from '../components/shared/CisFooter';

// Icons
import { Facebook, Instagram, WhatsApp, YouTube } from '@mui/icons-material/';
import useAllRequests from '../queries/useAllRequests';

const initialState = {
  name:'',
  email:'',
  asunto:'',
  mensaje:''
}

export default function contact() {

  const [ formValues, setFormValues ] = useState(initialState);
  const { useSubmitRecommendationMutation } = useAllRequests();
  const { mutate } = useSubmitRecommendationMutation();

  const { asunto, email, mensaje, name } = formValues;

  function handleForm (name:string, value:string) {
    setFormValues({ ...formValues, [name]:value });
  }

  function validateForm () {
    if (!asunto || !email || !mensaje || !name) {
      alert('Es necesario ingresar todos los datos del formulario');
      return false;
    }
    else return true;
  }

  function sendFormValues () {
    if (!validateForm()) return;
    mutate(formValues);
  }

  return (
    <GlobalContainer title='Contacto'>
      <PaddingContainer backgroundColor={blueGrey[900]}>
        <Typography variant='h4' color='white' textAlign='center' mb={4}>
          <b>Contáctanos</b>
        </Typography>
        <Grid container spacing={{ xs:4, lg:20 }} mb={4}>
          <Grid item xs={0} md={6} sx={{ display:{ xs:'none', md:'flex' }, alignItems:'center', flexDirection:'center', justifyContent:'center' }}>
            <img src='/assets/contact/contact-img.png' style={{ maxWidth:300 }}/>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display:'flex', flexDirection:'column' }}>
            <Paper>
              <form onSubmit={(e) => { e.preventDefault(); sendFormValues(); }} style={{ display:'flex', flexDirection:'column' }}>
                <Stack rowGap={2} padding={3}>
                  <Typography variant='h6'>Anota tus datos para mandar un correo</Typography>
                  <TextField
                    label='Nombre'
                    variant='filled'
                    type='text'
                    onChange={(e) => handleForm(e.target.name, e.target.value)}
                    name='name'
                  />
                  <TextField
                    label='Email'
                    variant='filled'
                    type='email'
                    onChange={(e) => handleForm(e.target.name, e.target.value)}
                    name='email'
                  />
                  <TextField
                    label='Asunto'
                    variant='filled'
                    type='text'
                    onChange={(e) => handleForm(e.target.name, e.target.value)}
                    name='asunto'
                  />
                  <TextField
                    label='Mensaje o comentario'
                    variant='filled'
                    type='text'
                    rows={4}
                    onChange={(e) => handleForm(e.target.name, e.target.value)}
                    name='mensaje'
                  />
                  <Button variant='contained' type='submit'>Mandar</Button>
                </Stack>
              </form>
            </Paper>
          </Grid>
        </Grid>
        <Typography variant='h4' color='white' textAlign='center' mb={4}>
          <b>Redes sociales</b>
        </Typography>
        <Stack 
          flexDirection='row' 
          sx={{ width:'100%', justifyContent:{ xs:'space-between', md:'center' }, flexWrap:'wrap' }}
          columnGap={4}
          rowGap={4}
        >
          {iconButtons.map(({ title, to }, key) => (
            <Button key={key} sx={{ textTransform:'initial' }}>
              <a href={to} target="_blank" style={{ textDecoration:'none', color:'white' }} rel="noreferrer">
                {title === 'Facebook' && <Facebook fontSize='large'/>}
                {title === 'Instagram' && <Instagram fontSize='large'/>}
                {title === 'WhatsApp' && <WhatsApp fontSize='large'/>}
                {title === 'Youtube' && <YouTube fontSize='large'/>}
                <Typography>{title}</Typography>
              </a>
            </Button>
          ))}
        </Stack>
      </PaddingContainer>
    </GlobalContainer>
  )
}
