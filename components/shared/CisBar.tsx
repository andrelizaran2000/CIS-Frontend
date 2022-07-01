// Modules
import React from 'react'

// MUI
import { Theme } from '@mui/system';
import { Menu } from '@mui/icons-material';
import { blue } from '@mui/material/colors';
import { Box, Button, Grid, IconButton, Stack, SxProps, Typography } from '@mui/material';

// Icons
import { QuestionMark, Chat } from '@mui/icons-material';

// Images
import { images } from '../../utils/sources'
import { WhiteField } from './Common';

const container:SxProps<Theme> = {
  width:'100%', 
  backgroundColor: blue[900],
  display:'flex',
  flexDirection:'column'
}

const flexContainer:SxProps<Theme> = {
  paddingX:4, 
  paddingY:2, 
}

export default function CisBar() {
  return (
    <Box sx={container}>
      <Stack sx={flexContainer} rowGap={2}>
        <FirstBarRow/>
        <SecondBarRow/>
      </Stack>
    </Box>
  )
}

const stackContainer:SxProps<Theme> = {
  display:{ 
    xs:'flex', 
    md:'none',
  },
  justifyContent:'space-between'
}

const gridContainer:SxProps<Theme> = {
  display:{ 
    xs:'none', 
    md:'flex',
  }
} 

const logoContainer:SxProps<Theme> = {
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
}

const logoImage = (
  <img 
    src={images.logo}
    style={{ width:160 }}
  />
)

function FirstBarRow () {
  return (
    <>
      <Stack direction='row' sx={stackContainer}>
        {logoImage}
        <IconButton>
          <Menu sx={{ color:'white' }}/>
        </IconButton>
      </Stack>
      <Grid container sx={gridContainer} spacing={4}>
        <Grid item md={3} sx={logoContainer}>
          {logoImage}
        </Grid>
        <Grid item md={6}>
          <WhiteField variant='filled' sx={{ width:'100%' }} size="small"/>
        </Grid> 
        <Grid item md={3}>
          <Grid container>
            <Grid item md={6} sx={logoContainer}>
              <Stack spacing={1} alignItems='center'>
                <QuestionMark sx={{ color:'white' }}/>
                <Typography variant='caption' sx={{ color:'white' }}>¿Quiénes somos?</Typography>
              </Stack>
            </Grid>
            <Grid item md={6} sx={logoContainer}>
              <Stack spacing={1} alignItems='center'>
                <Chat sx={{ color:'white' }}/>
                <Typography variant='caption' sx={{ color:'white' }}>Contáctanos</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

function SecondBarRow () {
  return (
    <Grid container sx={{ display:{ xs:'none', md:'flex' }}}>
      {tabs.map(({ title }, index) => (
        <Grid item md={2} key={index}>
          <Button variant='text' sx={{ color:'white', width:'100%', paddingY:1 }}>{title}</Button>
        </Grid>
      ))}
    </Grid>
  )
}

type TabsType = {
  title:string,
  to:string
}

const tabs:TabsType[] = [
  { title:'Inicio', to:'' },
  { title:'Eventos', to :'' },
  { title:'Registro', to:'' },
  { title:'Historial', to:'' },
  { title:'Noticias', to:'' },
  { title:'Contacto', to:'' },
]