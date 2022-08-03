// Modules
import React from 'react';
import { blueGrey } from '@mui/material/colors';
import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material';

// Components
import GlobalContainer from '../components/containers/GlobalContainer'
import PaddingContainer from '../components/containers/PaddingContainer'

// Consts
import { iconButtons } from '../components/shared/CisFooter';

// Icons
import { Facebook, Instagram, WhatsApp, YouTube } from '@mui/icons-material/';

export default function contact() {
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
