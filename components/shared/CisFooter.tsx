// Modules
import React from 'react'

// MUI
import { blue } from '@mui/material/colors'
import { Stack, Typography } from '@mui/material'
import { Facebook, Instagram, WhatsApp, YouTube } from '@mui/icons-material/';

// Images
import { images } from '../../utils/sources'

export default function CisFooter() {
  return (
    <Stack direction='row' sx={{ paddingY:2, paddingX:4, backgroundColor:blue[900], justifyContent:'space-between', alignItems:'center' }}>
      <img src={images.logo} style={{ width:160 }}/>
      <Stack direction='row' columnGap={4} sx={{ display: { xs:'none', md:'flex' }}}>
        {iconButtons.map(({ title, icon }) => (
          <Stack direction='row' columnGap={1}>
            { icon === 'facebook'  && <Facebook sx={{ color:'white' }}/> }
            { icon === 'instagram' && <Instagram sx={{ color:'white' }}/> }
            { icon === 'whatsApp'  && <WhatsApp sx={{ color:'white' }}/> }
            { icon === 'youtube'   && <YouTube sx={{ color:'white' }}/> }
            <Typography sx={{ color:'white' }}>{title}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

const iconButtons = [
  { title:'Facebook',  to:'', icon:'facebook' },
  { title:'Instagram', to:'', icon:'instagram' },
  { title:'WhatsApp',  to:'', icon:'whatsApp' },
  { title:'Youtube',   to:'', icon:'youtube' },
]
