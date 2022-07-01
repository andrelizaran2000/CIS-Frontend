// Modules
import React from 'react'

// Containers
import BarContainer from '../components/containers/BarContainer'
import HeadContainer from '../components/containers/HeadContainer'
import TraductionContainer from '../components/containers/TraductionContainer'

// Components
import AboutEachOfUs from '../components/screen/aboutUs/AboutUs'
import Institutions from '../components/screen/aboutUs/Institutions'
import Main from '../components/screen/aboutUs/Main'

export default function AboutUs () {
  return (
    <TraductionContainer>
      <HeadContainer title='¿Quiénes somos?'>
        <BarContainer>
          <Main/>
          <Institutions/>
          <AboutEachOfUs/>
        </BarContainer>
      </HeadContainer>
    </TraductionContainer>
  )
}
