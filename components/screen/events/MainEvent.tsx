// Modules
import React from 'react'

// MUI
import { 
  Avatar, 
  Grid, 
  ListItem, 
  ListItemText, 
  Stack, 
  Typography 
} from '@mui/material'
import { blueGrey } from '@mui/material/colors';

import {
  CalendarMonth,
  LockClock,
  Monitor
} from '@mui/icons-material'

// Container
import PaddingContainer from '../../../components/containers/PaddingContainer'

export default function MainEvent () {
  return (
    <PaddingContainer backgroundColor={blueGrey[900]}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <img src={'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/imagen%2010.png?alt=media&token=7c149783-3895-4928-8140-043788953093'} style={{ width:'100%' }}/>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display:'flex', justifyContent:'center', flexDirection:'column', color:'white' }}>
          <Stack rowGap={2} mb={2}>
            <Typography variant='h4'>Diseña fácil con canva</Typography>
            <Typography>Los invitamos a asistir al taller acerca de herramientas digitales con Canva, donde ademas inmediatamente después se realizara un breve recorrido virtual por el ITVER.</Typography>
          </Stack>
          <Stack>
            <ListItem>
              <Avatar><CalendarMonth/></Avatar>
              <ListItemText primary='Viernes 19 de Noviembre' sx={{ paddingLeft:2 }}/>
            </ListItem>
            <ListItem>
              <Avatar><LockClock/></Avatar>
              <ListItemText primary='12 Horas' sx={{ paddingLeft:2 }}/>
            </ListItem>
            <ListItem>
              <Avatar><Monitor/></Avatar>
              <ListItemText primary='Link de la reunión: ' sx={{ paddingLeft:2 }}/>
            </ListItem>
          </Stack>
        </Grid>
      </Grid>
    </PaddingContainer>
  )
}
