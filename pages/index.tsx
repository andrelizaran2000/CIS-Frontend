// Modules
import React from 'react'

// Containers
import BarContainer from '../components/containers/BarContainer'
import HeadContainer from '../components/containers/HeadContainer'
import TraductionContainer from '../components/containers/TraductionContainer'
import AboutUs from '../components/screen/index/AboutUs'

// Components
import NextEvent from '../components/screen/index/NextEvent'
import MainCarousel from '../components/screen/index/MainCarousel'

export default function Home () {
  
  return (
    <TraductionContainer>
      <HeadContainer title='Bienvenido'>
        <BarContainer>
          <MainCarousel/>
          <NextEvent/>
          <AboutUs/>
        </BarContainer>
      </HeadContainer>
    </TraductionContainer>
  )
}
