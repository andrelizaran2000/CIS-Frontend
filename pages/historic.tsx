// Modules
import React from 'react';
import { blueGrey } from '@mui/material/colors';
import { Button, Grid, Stack, Typography } from '@mui/material';

// Components
import Main from '../components/screen/historic/Main';
import GlobalContainer from '../components/containers/GlobalContainer'
import PaddingContainer from '../components/containers/PaddingContainer';

export default function historic() {
  return (
    <GlobalContainer title='Historial'>
      <Main/>
      <HistoricContainer eventsList={events2022} title='2022'/>
      <HistoricContainer eventsList={events2021} title='2021'/>
    </GlobalContainer>
  )
}

type HistoricContainer = {
  eventsList: { title:string; image:string }[];
  title:string;
}

function HistoricContainer ({ eventsList, title }:HistoricContainer) {
  return (
    <Stack sx={{ marginBottom:4 }}>
      <PaddingContainer>
        <Typography variant='h6' sx={titleStyle}>
          <b>{title}</b>
        </Typography>
        <Grid container spacing={4}>
          {eventsList.map(({ image, title }, key) => (
            <Grid item xs={12} md={6} lg={4} xl={4} rowGap={2} key={key} sx={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
              <img style={{ width:'80%', borderRadius:5 }} src={image}/>
              <Typography sx={{ textAlign:'center', color:blueGrey[900] }}>
                <b>{title}</b>
              </Typography>
              <Button variant='contained'>Ver</Button>
            </Grid>
          ))}
        </Grid>
      </PaddingContainer>
    </Stack>
  )
}

// Styles
export const titleStyle = {
  paddingLeft:10, 
  backgroundColor:blueGrey[900], 
  color:'white', 
  alignSelf:'start', 
  marginBottom:4, 
  paddingTop:1,
  paddingRight:1,
  paddingBottom:1,
}

const events2022 = [
  { 
    title:'Plática "Oportunidades de hacer residencias profesionales en IMB"', 
    image:'assets/historic/2022/event1.png' 
  },
  { 
    title:'Plática "Educación inclusiva"', 
    image:'assets/historic/2022/event2.png' 
  },
  { 
    title:'Primer encuentro de Egresadas', 
    image:'assets/historic/2022/event3.png' 
  },
  { 
    title:'Ponencia "Comunicación Efectiva"',
    image:'assets/historic/2022/event4.png' 
  },
  { 
    title:'Tardes de posgrado', 
    image:'assets/historic/2022/event5.png' 
  },
]

const events2021 = [
  { 
    title:'Taller herramientas digitales', 
    image:'assets/historic/2021/event6.png' 
  },
  {
    title:'Plática "De estudiante a profesionista: Mi camino al éxito"', 
    image:'assets/historic/2021/event7.png' 
  },
  { 
    title:'9° SNAIC y 8° ENAIC 2021', 
    image:'assets/historic/2021/event8.png' 
  },
  { 
    title:'Colcis 2021', 
    image:'assets/historic/2021/event9.png' 
  },
  { 
    title:'Videoconferencia "Conoce tu reticula"', 
    image:'assets/historic/2021/event10.png' 
  },
  { 
    title:'Videoconferencia "¿Cómo ser resiliente ante el covid 19?"', 
    image:'assets/historic/2021/event11.png' 
  },
]