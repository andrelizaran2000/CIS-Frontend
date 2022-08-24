// Modules
import { grey } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';

// Containers
import LoadingScreen from '../components/shared/LoadingScreen';
import GlobalContainer from '../components/containers/GlobalContainer';
import PaddingContainer from '../components/containers/PaddingContainer';

// Hooks
import useAllRequests from '../queries/useAllRequests';

// Types
import { EventDataRequest } from '../types/general';

export default function events() {

  const { useGetEventsQuery } = useAllRequests();
  const { data, isLoading } = useGetEventsQuery();
  const [ eventData, setEventData ] = useState<EventDataRequest | null>(null);

  useEffect(() => {
    console.log(data)
    // if (data !== undefined) setEventData(data.data);
  }, [data]);

  if (!isLoading && eventData !== null) {
    return (
      <GlobalContainer title='Eventos'>
        <PaddingContainer>
          <Typography sx={{ color:grey[600], textAlign:'center', marginBottom:2 }} variant='h6'>FLYERS DE EVENTO</Typography> 
          <Stack flexDirection='row' columnGap={4}>
            <Stack sx={{ width:'50%' }}>
              <img src={eventData?.flyer1} style={{ width:'100%' }}/>
            </Stack>
            <Stack sx={{ width:'50%' }}>
              <img src={eventData?.flyer2} style={{ width:'100%' }}/>
            </Stack>
          </Stack>
          <Typography sx={{ color:grey[600], textAlign:'center', marginTop:4, marginBottom:4 }} variant='h6'>CALENDARIO DE ACTIVIDADES</Typography> 
          <Grid container spacing={4}>
            {eventData?.subevents.map(({ flyer, name, description, id }) => (
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
                    <Button variant='contained'>Ver</Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </PaddingContainer>
      </GlobalContainer>
    )
  } else return (
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