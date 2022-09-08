// Modules
import { 
  Button, 
  Card, 
  CardContent, 
  CardMedia, 
  Chip, 
  Grid, 
  Paper, 
  Stack, 
  Typography 
} from '@mui/material';
import Router from 'next/router';
import { grey } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';

// Containers
import LoadingScreen from '../components/shared/LoadingScreen';
import GlobalContainer from '../components/containers/GlobalContainer';
import PaddingContainer from '../components/containers/PaddingContainer';

// Hooks
import useAllRequests from '../queries/useAllRequests';

// Icons
import StadiumIcon from '@mui/icons-material/Stadium';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

// Types
import { EventDataRequest, SubeventRequest } from '../types/general';

export default function events() {

  const { useGetEventsQuery } = useAllRequests();
  const { data, isLoading } = useGetEventsQuery();
  const [ eventData, setEventData ] = useState<EventDataRequest | null>(null);
  const [ isEventAvailable, setIsEventAvailable ] = useState(true);

  useEffect(() => {
    if (data !== undefined && data.data.id !== undefined) setEventData(data.data);
    else setIsEventAvailable(false) 
  }, [data]);

  if (!isLoading && eventData !== null) {
    return (
      <GlobalContainer title='Eventos'>
        <PaddingContainer>
          <Typography sx={{ color:grey[600], textAlign:'center', marginBottom:2 }} variant='h6'>FLYERS DE EVENTO</Typography> 
          <Grid container spacing={4}>
            <Grid item sx={{ display:'flex', flexDirection:'column' }} xs={12} sm={6}>
              <img src={eventData?.flyer1}/>
            </Grid>
            <Grid item sx={{ display:'flex', flexDirection:'column' }} xs={12} sm={6}>
              <img src={eventData?.flyer2}/>
            </Grid>
          </Grid>
          <Typography sx={{ color:grey[600], textAlign:'center', marginTop:4, marginBottom:4 }} variant='h6'>CALENDARIO DE ACTIVIDADES</Typography> 
          <Grid container spacing={4}>
            {eventData?.subevents.map((subevent, key) => <SubeventCard {...subevent} key={key}/>)}
          </Grid>
        </PaddingContainer>
      </GlobalContainer>
    )
  }
  else if (!isLoading && eventData === null) return <NoEventAvailable/>
  else if (isLoading) return <LoadingEvent/>
  else return <></>
}

type SubeventCardProps = SubeventRequest;

function SubeventCard ({ flyer, name, description, id, event, initDate, type }:SubeventCardProps) {
  return (
    <Grid item sx={gridSubeventStyle} xs={12} sm={6} md={4} xl={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={flyer}
        />
        <CardContent sx={{ alignItems:'center', display:'flex', flexDirection:'column' }}>
          <Typography gutterBottom variant="h5" component="div">{name}</Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>{description}</Typography>
          <Chip 
            icon={<StadiumIcon />} 
            label={type.name} 
            sx={{ mb:1 }}
          />
          <Chip 
            icon={<CalendarMonthIcon />} 
            label={initDate} 
            sx={{ mb:2 }}
          />
          <Button variant='contained' onClick={() => Router.push(`/subevents/${id}`)}>Ver</Button>
        </CardContent>
      </Card>
    </Grid>
  )
}

function NoEventAvailable () {
  return (
    <GlobalContainer title='Eventos'>
      <PaddingContainer backgroundColor={grey[300]}>
        <Stack sx={{ paddingY:20 }}>
          <Paper>
            <Stack sx={{ padding:3, textAlign:'center', alignItems:'center', rowGap:1 }}>
              <Typography variant='h6'>No hay eventos disponibles</Typography>
              <SentimentVeryDissatisfiedIcon fontSize='large' sx={{ color:grey[700] }}/>
              <Typography>Revisa esta sección más tarde</Typography>
            </Stack>
          </Paper>
        </Stack>
      </PaddingContainer>
    </GlobalContainer>
  )
}

function LoadingEvent () {
  return (
    <GlobalContainer title='Eventos'>
      <LoadingScreen/>
    </GlobalContainer>
  )
}

const gridSubeventStyle = {
  display:'flex', 
  flexDirection:'column', 
  alignItems:'enter'
}