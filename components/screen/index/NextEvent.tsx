// Modules
import Router from 'next/router';
import { blueGrey } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import { Button, Chip, Grid, Stack, Typography } from '@mui/material';

// Containers
import PaddingContainer from '../../containers/PaddingContainer';

// Components
import LoadingScreen from '../../shared/LoadingScreen';

// Hooks
import useAllRequests from '../../../queries/useAllRequests';

// Types
import { SubeventRequest } from '../../../types/general';

// Icons
import StadiumIcon from '@mui/icons-material/Stadium';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function NextEvent () {

  const { useGetEventsQuery } = useAllRequests();
  const { data, isLoading } = useGetEventsQuery();
  const [ subeventData, setSubeventData ] = useState<null | SubeventRequest>(null);
  const [ eventType, setEventType ] = useState('');

  useEffect(() => {
    if (data?.data.id !== undefined) {
      const { data:newData } = data;
      const { subevents } = newData;
      if (subevents.length > 0) { 
        setSubeventData(subevents[0]);
        switch (subevents[0].event) {
          case 1:
            setEventType('Taller')
            break;
          case 2:
            setEventType('Curso')
            break;
          case 3:
            setEventType('Conferencia')
            break;
          case 4:
            setEventType('Práctica')
            break;
        }
      }
    }
  }, [data]);

  if (!isLoading && subeventData === null) return <></>
  if (isLoading) return <LoadingScreen size='small'/>
  else {
    return (
      <PaddingContainer>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} sx={{ alignItems:'center', display:'flex' }}>
            <Stack alignItems='start' rowGap={2}>
            <Typography variant='h4' color={blueGrey[900]}>
              <b>{subeventData?.name}</b>
            </Typography>
              <Typography variant='h6' sx={{ color:blueGrey[900] }}>{subeventData?.description}</Typography>
              <Chip 
                icon={<StadiumIcon />} 
                label={eventType} 
              />
              <Chip 
                icon={<CalendarMonthIcon />} 
                label={subeventData?.initDate} 
              />
              <Button 
                variant='contained' 
                size='large' 
                onClick={() => Router.push(`/subevents/${subeventData?.id}`)}
              >Saber más</Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display:'flex', alignItems:'end', justifyContent:'end' }}>
            <img src={subeventData?.flyer} style={{ width:'100%', maxWidth:450 }}/>
          </Grid>
        </Grid>
      </PaddingContainer>
    )
  }
}