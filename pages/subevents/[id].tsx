// Modules
import Router from 'next/router';
import { useRouter } from 'next/router';
import { blueGrey } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import { Button, Grid, Stack, Typography } from '@mui/material';

// Hooks
import useAllRequests from '../../queries/useAllRequests';
import LoadingScreen from '../../components/shared/LoadingScreen';
import GlobalContainer from '../../components/containers/GlobalContainer';
import PaddingContainer from '../../components/containers/PaddingContainer';

// Types
import { SubeventData } from '../../types/general';

export default function SubeventPage () {

  const router = useRouter()
  const { id } = router.query;
  const { useGetSubeventInformationMutation } = useAllRequests();
  const { mutate, data } = useGetSubeventInformationMutation();
  const [ titlePage, setTitlePage ] = useState('Cargando');
  const [ subeventData, setSubeventData ] = useState<null | SubeventData>(null)

  useEffect(() => {
    if (id !== undefined) mutate(Number(id));
  }, [id]);

  useEffect(() => {
    if (data !== undefined) {
      setSubeventData(data.data)
      setTitlePage(data.data.name);
    }
  }, [data]);

  if (subeventData === null) {
    return (
      <GlobalContainer title='Cargando'>
        <LoadingScreen/>
      </GlobalContainer>
    )
  } else {
    return (
      <GlobalContainer title={titlePage}>
        <PaddingContainer>
          <Grid container spacing={{ xs:4, lg:20 }}>
            <Grid item xs={12} sm={6} sx={{ display:'flex', flexDirection:'column', justifyContent:'center' }}>
              <img src={subeventData.flyer} style={{ borderRadius:5 }}/>
            </Grid>          
            <Grid item xs={12} sm={6} sx={{ color:blueGrey[900] }}>
              <Typography variant='h6' mb={1}><b>{subeventData.name}</b></Typography>
              <Typography sx={{ mb:4 }}>{subeventData.description}</Typography>
              <Typography variant='h6' mb={1}><b>Ponentes</b></Typography>
              <Stack rowGap={2} mb={2}>
                {subeventData.speakers.map(({ profilePhoto, firstName, lastName, title }, key) => (
                  <Stack sx={speakerContainer} key={key}>
                    <Stack>
                      <Typography variant='caption'>{title}</Typography>
                      <Typography>{`${lastName} ${firstName}`}</Typography>
                    </Stack>
                    <img src={profilePhoto} style={{ width:50, height:50, borderRadius:'100%' }}/>
                  </Stack>
                ))}
              </Stack>
              <Button 
                variant='contained' 
                sx={{ width:'100%' }}
                onClick={() => Router.push(`/register/${subeventData.id}`)}
              >Registrarse</Button>
            </Grid>
          </Grid> 
        </PaddingContainer>
      </GlobalContainer>
    )
  }
}

const speakerContainer = {
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center'
}