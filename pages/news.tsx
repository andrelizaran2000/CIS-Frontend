// Modules
import React, { useEffect } from 'react';

// Api
import { getNewsApi } from '../api/general'

// Container
import GlobalContainer from '../components/containers/GlobalContainer'

// Components
import MainNew from '../components/screen/news/MainNew'
import MoreNews from '../components/screen/news/MoreNews'

export default function news () {

  useEffect(() => {
    getNews();
  }, [])

  async function getNews () {
    const { data } = await getNewsApi(1);
    console.log(data);
  }

  return (
    <GlobalContainer title='Noticias'>
      <MainNew/>
      <MoreNews/>
    </GlobalContainer>
  )
}
