// Modules
import React, { useEffect, useState } from 'react';

// Container
import GlobalContainer from '../components/containers/GlobalContainer';

// Components
import MainNew from '../components/screen/news/MainNew';
import MoreNews from '../components/screen/news/MoreNews';
import LoadingScreen from '../components/shared/LoadingScreen';

// Queries
import useAllRequests from '../queries/useAllRequests';

// Types
import { NewData } from '../types/general';

export default function news () {

  const { useGetNewsMutation } = useAllRequests();
  const { mutate, data, isLoading } = useGetNewsMutation();
  const [ currentTab ] = useState(0);
  const [ news, setNews ] = useState<NewData[]>([]);
  const [ firstNew, setFirstNew ] = useState<null | NewData>(null);

  useEffect(() => {
    mutate(currentTab);
  }, [currentTab]);

  useEffect(() => {
    setNewsData(); 
  }, [data]);

  function setNewsData () {
    if (data === undefined) return;
    const { news } = data.data;
    if (news.length === 0) return;
    setFirstNew(news[0]);
    if (news.length < 1) return;
    const newsWithoutFirst = news;
    newsWithoutFirst.shift();
    setNews(newsWithoutFirst);
  }

  return (
    <GlobalContainer title='Noticias'>
      { (news.length > 0 && firstNew !== null) && <MainNew {...firstNew}/>}
      { (news.length > 0) && <MoreNews news={news}/> }
      { (isLoading || data === undefined) && <LoadingScreen/> }
    </GlobalContainer>
  )
}
