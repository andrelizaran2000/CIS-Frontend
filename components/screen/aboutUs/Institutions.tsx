// Modules
import React from 'react'

// MUI
import { Grid, Stack, Typography } from '@mui/material'

// Hooks
import useTraduction from '../../../hooks/useTraductions'

// Containers
import PaddingContainer from '../../containers/PaddingContainer'

// Styles
import { titleStyle } from './AboutUs'

export default function institutions() {
  const traduce = useTraduction('aboutUs')
  return (
    <PaddingContainer>
      <Stack rowGap={4}>
        <Typography sx={titleStyle} variant='h5'>{traduce('institutions.title')}</Typography>
        <Grid container spacing={4}>
          {institutionLogos.map((logo) => (
            <Grid item xs={4} sm={3} md={2} xl={1}>
              <img src={logo} style={{ width:'100%' }} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </PaddingContainer>
  )
}

const institutionLogos = [
  'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Mask%20group.png?alt=media&token=20594d72-386d-4f2f-944d-0011d56d7eda',
  'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Mask%20group.png?alt=media&token=20594d72-386d-4f2f-944d-0011d56d7eda',
  'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Mask%20group.png?alt=media&token=20594d72-386d-4f2f-944d-0011d56d7eda',
  'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Mask%20group.png?alt=media&token=20594d72-386d-4f2f-944d-0011d56d7eda',
  'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Mask%20group.png?alt=media&token=20594d72-386d-4f2f-944d-0011d56d7eda',
  'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Mask%20group.png?alt=media&token=20594d72-386d-4f2f-944d-0011d56d7eda',
  'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Mask%20group.png?alt=media&token=20594d72-386d-4f2f-944d-0011d56d7eda',
  'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Mask%20group.png?alt=media&token=20594d72-386d-4f2f-944d-0011d56d7eda',
  'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Mask%20group.png?alt=media&token=20594d72-386d-4f2f-944d-0011d56d7eda',
  'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Mask%20group.png?alt=media&token=20594d72-386d-4f2f-944d-0011d56d7eda',
  'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Mask%20group.png?alt=media&token=20594d72-386d-4f2f-944d-0011d56d7eda',
  'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Mask%20group.png?alt=media&token=20594d72-386d-4f2f-944d-0011d56d7eda',
  'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Mask%20group.png?alt=media&token=20594d72-386d-4f2f-944d-0011d56d7eda',
  'https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Mask%20group.png?alt=media&token=20594d72-386d-4f2f-944d-0011d56d7eda',
]