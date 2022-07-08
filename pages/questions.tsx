// Modules
import React from 'react'

// Containers
import GlobalContainer from '../components/containers/GlobalContainer'

// Components
import QuestionAndEvents from '../components/screen/questions/QuestionAndEvents'

export default function Questions () {
  return (
    <GlobalContainer title='Preguntas frecuentes'>
      <QuestionAndEvents/>
    </GlobalContainer>
  )
}

