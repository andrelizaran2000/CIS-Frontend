// Modules
import React from 'react';
import { CircularProgress, Stack } from '@mui/material';

export default function LoadingScreen() {
  return (
    <Stack sx={{ width:'100%', height:'80vh', alignItems:'center', justifyContent:'center' }}>
      <CircularProgress/>
    </Stack>
  )
}
