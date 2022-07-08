// Modules
import React, { useState } from 'react'

// MUI
import { Theme } from '@mui/system';
import { blue } from '@mui/material/colors';
import { Box, Button, Grid, IconButton, Stack, SxProps, Typography, Menu, MenuItem } from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';

// Icons
import { QuestionMark, Chat } from '@mui/icons-material';

// Images
import { images } from '../../utils/sources';

const container:SxProps<Theme> = {
  width:'100%', 
  backgroundColor: blue[900],
  display:'flex',
  flexDirection:'column'
}

const flexContainer:SxProps<Theme> = {
  paddingX:{ xs:4, lg:20 }, 
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

const logoContainerStart:SxProps<Theme> = {
  display:'flex',
  alignItems:'center',
  justifyContent:'start'
}

const logoContainerEnd:SxProps<Theme> = {
  display:'flex',
  alignItems:'center',
  justifyContent:'end'
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
          <MenuIcon sx={{ color:'white' }}/>
        </IconButton>
      </Stack>
      <Grid container sx={gridContainer} spacing={4}>
        <Grid item md={3} sx={logoContainerStart}>
          {logoImage}
        </Grid>
        <Grid item md={6}/>
        <Grid item md={3}>
          <Grid container>
            <Grid item md={6} sx={logoContainerEnd}>
              <Stack spacing={1} alignItems='center'>
                <QuestionMark sx={{ color:'white' }}/>
                <Typography variant='caption' sx={{ color:'white' }}>¿Quiénes somos?</Typography>
              </Stack>
            </Grid>
            <Grid item md={6} sx={logoContainerEnd}>
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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container sx={{ display:{ xs:'none', md:'flex' }}}>
      {tabs.map(({ title }, index) => (
        <Grid item md={2} key={index}>
          <div>
            <Button 
              variant='text' 
              sx={{ color:'white', width:'100%', paddingY:1 }} 
              onClick={handleClick} 
              id={`basic-button-${index}`}
            >{title}</Button>
          </div>
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