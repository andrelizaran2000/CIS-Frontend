// Modules
import React from 'react'

// Container
import BarContainer from '../components/containers/BarContainer'
import HeadContainer from '../components/containers/HeadContainer'
import TraductionContainer from '../components/containers/TraductionContainer'

// Components
import MainNew from '../components/screen/news/MainNew'
import MoreNews from '../components/screen/news/MoreNews'

export default function news () {
  return (
    <TraductionContainer>
      <HeadContainer title='Bienvenido'>
        <BarContainer>
          <MainNew/>
          <MoreNews/>
        </BarContainer>
      </HeadContainer>
    </TraductionContainer>
  )
}
