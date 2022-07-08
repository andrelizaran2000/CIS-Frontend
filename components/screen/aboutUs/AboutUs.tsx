// Modules
import React from 'react'

// MUI
import { blueGrey } from '@mui/material/colors'
import { Grid, Stack, SxProps, Theme, Typography } from '@mui/material'

// Containers
import PaddingContainer from '../../containers/PaddingContainer'

// Hooks
import useTraduction from '../../../hooks/useTraductions'

export const titleStyle:SxProps<Theme> = {
  textDecoration:'underline', 
  color:blueGrey[900],
  textAlign:'center'
}

export default function aboutUs () {
  const traduce = useTraduction('aboutUs')
  return (
    <PaddingContainer>
      <Stack rowGap={4}>
        <Typography sx={titleStyle} variant='h4'>{traduce('about-us.title')}</Typography>
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
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Stack spacing={1} sx={{ alignItems:'center' }}>
        <img src={src} style={{ width:'100%' }}/>
        <Typography sx={{ color:blueGrey[900], textAlign:'center' }} variant='body2'>{name}</Typography>
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
    name:'Erick Montalvo Cruz', 
    src:'/assets/about-us/member7.png'
  },
  { 
    name:'Ángel Sanchez Domínguez', 
    src:'/assets/about-us/member5.png'
  },
  { 
    name:'Irving Naranjo Paredes', 
     src:'/assets/about-us/member6.png'
  }
]