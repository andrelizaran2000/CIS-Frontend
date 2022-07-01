// MUI
import { Stack } from '@mui/material';
import React, { ReactNode } from 'react';

type Props = {
  children:ReactNode;
  backgroundColor?:string;
}

export default function PaddingContainer ({ children, backgroundColor = 'white' }:Props) {
  return (
    <Stack sx={{ paddingY:4, paddingX:{ xs:4, lg:20 }, backgroundColor }} direction='column'>
      {children}
    </Stack>
  )
}
