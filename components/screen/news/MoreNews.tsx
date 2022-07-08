// Modules
import React from 'react'

// MUI
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

// Hooks
import useTraduction from '../../../hooks/useTraductions'

// Container
import PaddingContainer from '../../containers/PaddingContainer'

// Styles
import { titleStyle } from '../aboutUs/AboutUs'

export default function MoreNews () {
  const traduce = useTraduction('news')
  return (
    <PaddingContainer>
      <Typography sx={{ ...titleStyle, mb:4 }} variant='h4'>{traduce('news.title')}</Typography>
      <Grid container spacing={4} mb={4}>
        {newsArray.map(({ title, body }, key) => (
          <Grid item xs={12} sm={6} md={4} lg={3} sx={{ borderRadius:2 }} key={key}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image="https://firebasestorage.googleapis.com/v0/b/cis-frontend-81086.appspot.com/o/Rectangle%2076.png?alt=media&token=de517a4e-3cf8-4401-bb3d-e54c85b63c9c"
              />
              <CardContent sx={{ pb:2 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button sx={{ alignSelf:'center' }} variant='contained'>Conocer más</Button> 
    </PaddingContainer>
  )
}

type NewItem = {
  title: string;
  body: string;
}

const newsArray:NewItem[] = [
  { 
    title:'IA para aumentar la calidad y la cantidad de la terapia de salud mental', 
    body:'Utilizar procesamiento del lenguaje natural para analizar las sesiones puede señalar los puntos fuertes y débiles de los psicoterapeutas y dar pistas sobre qué terapias funcionan mejor en cada paciente. El mayor reto reside en acceder al contenido de unas conversaciones tan íntimas.' 
  },
  { 
    title:'Meta enseña varias habilidades a una IA con aprendizaje autosupervisado', 
    body:'Aunque los humanos lo aprendemos casi todo de esta forma, el campo de la inteligencia artificial ha ignorado bastante esta técnica. La red social la ha usado para que un algoritmo reconozca imágenes, texto y voz, con resultados que igualan o incluso superan a los métodos de aprendizaje convencionales' 
  },
  { 
    title:'Ucrania usa criptomonedas para financiar su defensa contra Rusia', 
    body:'La estrategia está plagada de complicaciones debido los vaivenes de las plataformas y las estafas que se multiplican' 
  },
  { 
    title:'TR10: El fin de las contraseñas', 
    body:'Las contraseñas alfanuméricas tienen los días contados gracias a los nuevos métodos de autenticación biométricos' 
  },
  { 
    title:'2021: el año de los modelos de inteligencia artificial gigantes', 
    body:'La tendencia empezó en 2020 con el modelo de lenguaje GPT-3, con 175.000 millones de parámetros, una cifra que no ha dejado de crecer gracias a los rivales del sector. Pero nadie sabe por qué el tamaño importa tanto y el enfoque no resuelve el problema de los sesgos de los datos de entrenamiento ni supone innovaciones disruptivas' 
  },
  { 
    title:'El día que aprendí que el éxito no es fruto del talento, sino del esfuerzo', 
    body:'Cuando la ingeniera química Daniela Blanco decidió revolucionar esta enorme y tradicional industria, se dio cuenta de que todavía tenía mucho que aprender. Pero en lugar de desesperarse, aprovechó cada página en blanco con la que se topó para escribir su propio camino hacia el éxito' 
  },
  { 
    title:'Por qué EE. UU. tiene tanta urgencia en culpar a Rusia de ciberataques', 
    body:'La Casa Blanca actuó rápido culpando públicamente a Rusia por un ciberataque contra Ucrania. Es la señal más reciente de que la atribución de ciberoperaciones es una herramienta crucial en el arsenal de Washington' 
  },
]