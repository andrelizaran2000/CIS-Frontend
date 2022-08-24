// Modules
import React from 'react'
import { Stack } from '@mui/material'

type Props = {
  image:string;
}

export default function Main ({ image }:Props) {
  const containerStyle = {
    padding:4, 
    alignItems:'center', 
    justifyContent:'center', 
    height:'400px',
    backgroundImage:`url(${image})`,
    color:'white',
    textAlign:'center',
    backgroundSize:'cover'
  }
  return (
    <Stack sx={containerStyle}/>
  )
}