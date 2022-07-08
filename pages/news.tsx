// Modules
import React from 'react'

// Container
import GlobalContainer from '../components/containers/GlobalContainer'

// Components
import MainNew from '../components/screen/news/MainNew'
import MoreNews from '../components/screen/news/MoreNews'

export default function news () {
  return (
    <GlobalContainer title='Noticias'>
      <MainNew/>
      <MoreNews/>
    </GlobalContainer>
  )
}
