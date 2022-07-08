// Modules
import React from 'react'

// Containers
import GlobalContainer from '../components/containers/GlobalContainer'

// Components
import AboutUs from '../components/screen/index/AboutUs'
import NextEvent from '../components/screen/index/NextEvent'
import MainCarousel from '../components/screen/index/MainCarousel'

export default function Home () {
  
  return (
    <GlobalContainer title='Bienvenido'>
      <MainCarousel/>
      <NextEvent/>
      <AboutUs/>
    </GlobalContainer>
  )
}
