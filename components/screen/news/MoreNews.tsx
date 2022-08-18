// Modules
import React from 'react'

// MUI
import { 
  Button, 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Grid,
  Typography 
} from '@mui/material'

// Hooks
import useTraduction from '../../../hooks/useTraductions'

// Container
import PaddingContainer from '../../containers/PaddingContainer'

// Styles
import { titleStyle } from '../aboutUs/AboutUs';

// Types
import { NewData } from '../../../types/general';

type Props = {
  news:NewData[];
}

export default function MoreNews ({ news }:Props) {
  const traduce = useTraduction('news')
  return (
    <PaddingContainer>
      <Typography sx={{ ...titleStyle, mb:4 }} variant='h4'>{traduce('news.title')}</Typography>
      <Grid container spacing={4} mb={4}>
        {news.map(({ title, description, coverPhoto, link }, key) => (
          <Grid item xs={12} sm={6} md={4} lg={3} sx={{ borderRadius:2 }} key={key}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={coverPhoto}
              />
              <CardContent sx={{ pb:2 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button>
                  <a href={link}>Visitar sitio</a>
                </Button>
              </CardActions>
            </Card>
          </Grid>  
        ))}
      </Grid>
      <Button sx={{ alignSelf:'center' }} variant='contained'>Conocer más</Button> 
    </PaddingContainer>
  )
}