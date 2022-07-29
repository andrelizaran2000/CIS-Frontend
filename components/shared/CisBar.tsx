// Modules
import Router from 'next/router';
import React, { useState } from 'react';

// MUI
import { Theme } from '@mui/system';
import { blue } from '@mui/material/colors';
import { Box, Button, Grid, IconButton, Stack, SxProps,Dialog, DialogTitle, List, ListItem, ListItemText } from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';

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

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Box sx={container}>
      <Stack sx={flexContainer} rowGap={2}>
        <FirstBarRow setIsDialogOpen={setIsDialogOpen}/>
        <SecondBarRow/>
        <Dialog
          fullWidth={true}
          open={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        >
          <DialogTitle>Menú</DialogTitle>
          <List sx={{ pt: 0, pl:1 }}>
            {tabs.map(({ title, to }) => (
              <ListItem button onClick={() => { Router.push(to); setIsDialogOpen(false); }}>
                <ListItemText primary={title} />
              </ListItem>
            ))}
          </List>
        </Dialog>
      </Stack>
    </Box>
  )
}

const stackContainer:SxProps<Theme> = {
  justifyContent:{ xs:'space-between', md:'center' }
}

const logoImage = (
  <img 
    src={images.logo}
    style={{ width:160 }}
  />
)

function FirstBarRow ({ setIsDialogOpen }:any) {
  return (
    <>
      <Stack direction='row' sx={stackContainer}>
        {logoImage}
        <IconButton sx={{ display:{ xs:'block', md:'none' }}} onClick={() => setIsDialogOpen(true)}>
          <MenuIcon sx={{ color:'white' }}/>
        </IconButton>
      </Stack>
    </>
  )
}

function SecondBarRow () {

  const handleClick = (to:string) => {
    Router.push(to)
  };

  return (
    <Grid container sx={{ display:{ xs:'none', md:'flex' }}}>
      {tabs.map(({ title, to }, index) => (
        <Grid item md={2} key={index}>
          <div>
            <Button 
              variant='text' 
              sx={{ color:'white', width:'100%', paddingY:1 }} 
              onClick={() => handleClick(to)} 
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
  { title:'Inicio', to:'/' },
  { title:'Eventos', to :'/events' },
  { title:'Registro', to:'/events' },
  { title:'Historial', to:'/' },
  { title:'Noticias', to:'/news' },
  { title:'Contacto', to:'/contact' },
]