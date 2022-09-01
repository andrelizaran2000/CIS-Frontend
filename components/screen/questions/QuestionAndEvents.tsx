// Modules|
import React from 'react'

// MUI
import { blueGrey } from '@mui/material/colors';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Stack, Typography } from '@mui/material';

// Icons
import { ExpandMore } from '@mui/icons-material';

// Containers
import PaddingContainer from '../../containers/PaddingContainer';

export default function QuestionAndEvents() {
  return (
    <PaddingContainer backgroundColor={blueGrey[50]}>
      <Grid container spacing={4} sx={{ minHeight:'70vh' }}>
        <Grid item lg={4} sx={{ width:'100%'}}>
          <Typography variant='h5' mb={2}>Eventos generales</Typography>
          <Stack rowGap={2}>
            {expansionPanels.map((props, key) => <EventAccordion {...props} key={key}/>)}
          </Stack>
        </Grid>
        <Grid item lg={8}>
          <Typography variant='h5' mb={2}>Preguntas frecuentes</Typography>
          <Stack rowGap={2}>
            {expansionQuestions.map((props, key) => <QuestionAccordion {...props} key={key}/>)}
          </Stack>
        </Grid>
      </Grid>
    </PaddingContainer>
  )
}

const expansionPanels = [
  { title:'Eventos', events:[1, 2, 3, 4] },
  { title:'Talleres', events:[1, 2, 3, 4] },
  { title:'Cursos', events:[1, 2, 3, 4] },
  { title:'Conferencias', events:[1, 2, 3, 4] },
]

type EventAccordionProps = {
  title:string;
  events:number[]
}

function EventAccordion ({ title }:EventAccordionProps) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore/>}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

const expansionQuestions: QuestionAccordionProps[] = [
  { title:'¿Tienen algun costo los talleres/cursos?', answer:'Lorem quis Lorem laboris eu reprehenderit nostrud. Anim id amet ad cupidatat incididunt enim. Eu laboris occaecat sunt amet qui. Fugiat non tempor anim est ea ex proident laborum est ullamco. Ex dolor proident proident magna ad excepteur non labore veniam est.' },
  { title:'¿Me darán algun crédito complementario?', answer:'Dolor velit sint non eiusmod veniam non cillum sint duis. Aute laborum occaecat non aliquip eiusmod magna. Duis adipisicing ullamco pariatur dolor non velit. Anim eu officia adipisicing adipisicing sit anim tempor velit. Lorem consequat incididunt nostrud qui minim nostrud laborum ex ex mollit eiusmod. Aliquip esse et qui aliqua nostrud exercitation dolor aliquip deserunt eiusmod mollit sunt amet et.' },
  { title:'¿Me darán algún diploma al terminar el taller/curso?', answer:'Sint qui id cupidatat consequat aliqua amet cupidatat duis cillum. Laboris enim enim consequat nisi. Labore nisi dolore irure voluptate ut non Lorem id.' },
  { title:'¿Tienen algun costo los talleres/cursos?', answer:'Sint qui id cupidatat consequat aliqua amet cupidatat duis cillum. Laboris enim enim consequat nisi. Labore nisi dolore irure voluptate ut non Lorem id.' },
  { title:'¿Me darán algun crédito complementario?', answer:'Sint qui id cupidatat consequat aliqua amet cupidatat duis cillum. Laboris enim enim consequat nisi. Labore nisi dolore irure voluptate ut non Lorem id.' },
  { title:'¿Me darán algún diploma al terminar el taller/curso?', answer:'Sint qui id cupidatat consequat aliqua amet cupidatat duis cillum. Laboris enim enim consequat nisi. Labore nisi dolore irure voluptate ut non Lorem id.' },
]

function QuestionAccordion ({ title, answer }:QuestionAccordionProps) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore/>}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}

type QuestionAccordionProps = {
  title:string;
  answer:string;
}

