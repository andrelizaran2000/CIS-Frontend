// Modules
import React from 'react'

// Containers
import GlobalContainer from '../components/containers/GlobalContainer'

// Components
import Main from '../components/screen/aboutUs/Main'
import AboutEachOfUs from '../components/screen/aboutUs/AboutUs'
import Institutions from '../components/screen/aboutUs/Institutions'
import MisionVision from '../components/screen/aboutUs/MisionVision'

export default function AboutUs () {
  return (
    <GlobalContainer title='¿Quiénes somos?'>
      <Main/>
      <MisionVision/>
      <Institutions/>
      <AboutEachOfUs/>
    </GlobalContainer>
  )
}
