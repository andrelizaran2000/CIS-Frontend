// Modules
import React from 'react'
import styled from '@emotion/styled';
import { OutlinedInputProps, TextField, TextFieldProps } from '@mui/material';

export const WhiteField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }:any) => ({
  '& .MuiFilledInput-root': {
    borderRadius: 4,
    backgroundColor: '#FFF',
  },
  '&:hover': {
    backgroundColor: '#FFF',
    borderRadius: 4,
  },
  '&.Mui-focused': {
    backgroundColor: '#FFF',
    borderRadius: 4,
  }
}));
