// Modules
import React from 'react'

// Modules
import { blueGrey } from '@mui/material/colors';
import { Grid, Stack, SxProps, Theme, Typography } from '@mui/material';

// Containers
import PaddingContainer from '../../containers/PaddingContainer';

// Hooks
import useTraduction from '../../../hooks/useTraductions';

export const titleStyle:SxProps<Theme> = {
  textDecoration:'underline', 
  textAlign:'center',
  fontWeight:'bold'
}

export default function aboutUs () {
  const traduce = useTraduction('aboutUs')
  return (
    <PaddingContainer>
      <Stack rowGap={4}>
        <Typography sx={{ ...titleStyle, color:blueGrey[900] }} variant='h3'>{traduce('about-us.title')}</Typography>
        <Grid container spacing={4}>
          {membersList.map(({ name, src }, index) => <MemberItem name={name} src={src} key={index}/>)}
        </Grid>
      </Stack>
    </PaddingContainer>
  )
}

type MemberItemProps = {
  name:string;
  src:any;
}

function MemberItem ({ name, src }:MemberItemProps) {
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Stack spacing={1} sx={{ alignItems:'center' }}>
        <img src={src} style={{ width:'100%', borderRadius:50 }}/>
        <Typography sx={{ color:blueGrey[900], textAlign:'center', fontWeight:'bold' }} variant='subtitle2'>{name}</Typography>
      </Stack>
    </Grid>
  )
}

const membersList:MemberItemProps[] = [
  { 
    name:'Iván de Jesús A. Malpica', 
    src: '/assets/about-us/member4.png'
  },
  { 
    name:'Gabriel Escobar Medina', 
    src:'/assets/about-us/member3.png' 
  },
  { 
    name:'Marco Gabriel Cortés Toledo', 
    src:'/assets/about-us/member2.png'
  },
  { 
    name:'Rafael de Jesús Vera Reyes', 
    src:'/assets/about-us/member8.png'
  },
  { 
    name:'Jesús André Lizarán Blanco', 
    src:'/assets/about-us/member1.png'
  },
  { 
    name:'Eric Montalvo Cruz', 
    src:'/assets/about-us/member7.png'
  },
  { 
    name:'Ángel Sanchez Domínguez', 
    src:'/assets/about-us/member5.png'
  },
  { 
    name:'Irving Naranjo Paredes', 
    src:'/assets/about-us/member6.png'
  },
  { 
    name:'Yelitza Rosas Jimenez', 
    src:'/assets/about-us/member9.JPG'
  },
  { 
    name:'Daniela Castro Reyes', 
    src:'/assets/about-us/member10.JPG'
  },
  { 
    name:'Karla Mariana Cordoba Vasquez', 
    src:'/assets/about-us/member11.JPG'
  },
  { 
    name:'Ángel Manuel Sandria Pérez', 
    src:'/assets/about-us/member12.JPG'
  },

]