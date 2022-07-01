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
        <Typography sx={titleStyle} variant='h5'>{traduce('about-us.title')}</Typography>
        <Grid container spacing={4}>
          {membersList.map(({ name, src }, index) => <MemberItem name={name} src={src} key={index}/>)}
        </Grid>
      </Stack>
    </PaddingContainer>
  )
}

type MemberItemProps = {
  name:string;
  src:string;
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
    name:'Yelitza M. Rosas Jimenez', 
    src:'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Rectangle%2081.png?alt=media&token=e00371ba-f220-4570-a8be-0ffd256472c8' 
  },
  { 
    name:'Rafael Rivera Lopez', 
    src:'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Rectangle%2082.png?alt=media&token=fb522d67-e9d2-42a5-ad55-4ad13ff48f4b' 
  },
  { 
    name:'Karla Mariana Cordova Vazquez', 
    src:'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Rectangle%2083.png?alt=media&token=3703dadc-3dd6-4361-962d-13e134978b76' 
  },
  { 
    name:'Angel Sanchez Dominguez', 
    src:'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Rectangle%2087.png?alt=media&token=1752ae33-d103-460d-9b4e-7161d2e8901e' 
  },
  { 
    name:'Miguel Angel Perez Cabada', 
    src:'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Rectangle%2086.png?alt=media&token=b8a8f668-52b7-4a50-8be7-b891e86c682d' 
  },
  { 
    name:'Yelitza M. Rosas Jimenez', 
    src:'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Rectangle%2081.png?alt=media&token=e00371ba-f220-4570-a8be-0ffd256472c8' 
  },
  { 
    name:'Rafael Rivera Lopez', 
    src:'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Rectangle%2082.png?alt=media&token=fb522d67-e9d2-42a5-ad55-4ad13ff48f4b' 
  },
  { 
    name:'Karla Mariana Cordova Vazquez', 
    src:'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Rectangle%2083.png?alt=media&token=3703dadc-3dd6-4361-962d-13e134978b76' 
  },
  { 
    name:'Angel Sanchez Dominguez', 
    src:'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Rectangle%2087.png?alt=media&token=1752ae33-d103-460d-9b4e-7161d2e8901e' 
  },
  { 
    name:'Miguel Angel Perez Cabada', 
    src:'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Rectangle%2086.png?alt=media&token=b8a8f668-52b7-4a50-8be7-b891e86c682d' 
  },
]