// Modules
import React from 'react'

// MUI
import { blue } from '@mui/material/colors'
import { Button, Stack, Typography } from '@mui/material'
import { Facebook, Instagram, WhatsApp, YouTube } from '@mui/icons-material/';

// Images
import { images } from '../../utils/sources'

// Containers
import PaddingContainer from '../containers/PaddingContainer';

export default function CisFooter() {
  return (
    <PaddingContainer backgroundColor={blue[900]}>
      <Stack direction='row' sx={{ justifyContent:'space-between', alignItems:'center' }}>
        <img src='/assets/cis-logo.png' style={{ width:160 }}/>
        <Stack direction='row' columnGap={{ xs:0, md:4 }} sx={{ display: { xs:'none', md:'block' }}}>
          {iconButtons.map(({ title, icon, to }, index) => (
            <Button sx={{ textTransform:'initial' }} key={index}>
              <a href={to} target="_blank" style={{ textDecoration:'none' }}>
                <Stack direction='row' columnGap={1}>
                  { icon === 'facebook'  && <Facebook sx={{ color:'white' }}/> }
                  { icon === 'instagram' && <Instagram sx={{ color:'white' }}/> }
                  { icon === 'whatsApp'  && <WhatsApp sx={{ color:'white' }}/> }
                  { icon === 'youtube'   && <YouTube sx={{ color:'white' }}/> }
                  <Typography sx={{ color:'white' }}>{title}</Typography>
                </Stack>
              </a>
            </Button>
          ))}
        </Stack>
      </Stack>
    </PaddingContainer>
  )
}

const iconButtons = [
  { title:'Facebook',  to:'https://www.facebook.com/CISITVER', icon:'facebook' },
  { title:'Instagram', to:'https://www.youtube.com/channel/UCXRR-JFPrMfxV0vgzVusT0g', icon:'instagram' },
  { title:'WhatsApp',  to:'https://api.whatsapp.com/send?phone=5212299063184', icon:'whatsApp' },
  { title:'Youtube',   to:' https://www.instagram.com/cis.itver/', icon:'youtube' },
]
