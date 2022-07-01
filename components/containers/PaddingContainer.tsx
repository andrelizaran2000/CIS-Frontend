// MUI
import { Stack } from '@mui/material';
import React, { ReactNode } from 'react';

type Props = {
  children:ReactNode;
  backgroundColor?:string;
}

export default function PaddingContainer ({ children, backgroundColor = 'white' }:Props) {
  return (
    <Stack sx={{ padding:4, backgroundColor }} direction='column'>
      {children}
    </Stack>
  )
}
