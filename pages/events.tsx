// Modules
import React from 'react';

// Containers
import GlobalContainer from '../components/containers/GlobalContainer';

// Components
import MainEvent from '../components/screen/events/MainEvent';

export default function events() {
  return (
    <GlobalContainer title='Eventos'>
      <MainEvent/>
    </GlobalContainer>
  )
}
