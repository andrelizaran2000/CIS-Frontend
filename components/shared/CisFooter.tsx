// Modules
import React from 'react'

// MUI
import { blue } from '@mui/material/colors'
import { Button, Stack, Typography } from '@mui/material'
import { Facebook, Instagram, WhatsApp, YouTube } from '@mui/icons-material/';

// Containers
import PaddingContainer from '../containers/PaddingContainer';

export default function CisFooter() {
  return (
    <PaddingContainer backgroundColor={blue[900]}>
      <Stack direction='row' sx={{ justifyContent:'space-between', alignItems:'center' }}>
        <img src='/assets/cis-logo.png' style={{ width:160 }}/>
        <Stack direction='row' columnGap={{ xs:0, md:4 }} sx={{ display: { xs:'none', md:'block' }}}>
          {iconButtons.map(({ title, to }, index) => (
            <Button sx={{ textTransform:'initial' }} key={index}>
              <a href={to} target="_blank" style={{ textDecoration:'none' }} rel="noopener noreferrer">
                <Stack direction='row' columnGap={1}>
                  { title === 'Facebook'  && <Facebook sx={{ color:'white' }}/> }
                  { title === 'Instagram' && <Instagram sx={{ color:'white' }}/> }
                  { title === 'WhatsApp'  && <WhatsApp sx={{ color:'white' }}/> }
                  { title === 'Youtube'   && <YouTube sx={{ color:'white' }}/> }
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

export const iconButtons = [
  { title:'Facebook',  to:'https://www.facebook.com/CISITVER' },
  { title:'Instagram', to:'https://www.instagram.com/cis.itver/' },
  { title:'WhatsApp',  to:'https://api.whatsapp.com/send?phone=5212299063184' },
  { title:'Youtube',   to:'https://www.youtube.com/channel/UCXRR-JFPrMfxV0vgzVusT0g' },
]
