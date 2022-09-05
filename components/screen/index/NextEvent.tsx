// Modules
import Router from 'next/router';
import { blueGrey } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import { Button, Grid, Stack, Typography } from '@mui/material';

// Containers
import PaddingContainer from '../../containers/PaddingContainer';

// Components
import LoadingScreen from '../../shared/LoadingScreen';

// Hooks
import useAllRequests from '../../../queries/useAllRequests';

// Types
import { SubeventRequest } from '../../../types/general';

export default function NextEvent () {

  const { useGetEventsQuery } = useAllRequests();
  const { data, isLoading } = useGetEventsQuery();
  const [ subeventData, setSubeventData ] = useState<null | SubeventRequest>(null);

  useEffect(() => {
    if (data !== undefined) {
      const { data:newData } = data;
      const { subevents } = newData;
      if (subevents.length > 0) setSubeventData(subevents[0]);
    }
    console.log(data);
  }, [data]);

  if (isLoading) return <LoadingScreen/>
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