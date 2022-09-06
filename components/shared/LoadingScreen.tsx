// Modules
import React from 'react';
import { CircularProgress, Stack } from '@mui/material';

type Props = {
  size?: 'small' | 'large'
}

export default function LoadingScreen ({ size = 'large' }:Props) {
  return (
    <Stack sx={size === 'large' ? largeProps : smallProps}>
      <CircularProgress/>
    </Stack>
  )
}

const largeProps = { 
  width:'100%', 
  height:'80vh', 
  alignItems:'center', 
  justifyContent:'center' 
}

const smallProps = {
  width:'100%', 
  paddingY:4, 
  alignItems:'center', 
  justifyContent:'center' 
}