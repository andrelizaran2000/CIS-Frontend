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
  const [ currentTab, setCurrentTab ] = useState(0);
  const [ news, setNews ] = useState<NewData[]>([]);
  const [ firstNew, setFirstNew ] = useState<null | NewData>(null);
  const [ isButtonEnabled, setIsButtonEnabled ] = useState(false)

  useEffect(() => {
    mutate(currentTab);
  }, [currentTab]);

  useEffect(() => {
    setNewsData(); 
  }, [data]);

  function updateTab () {
    setCurrentTab(currentTab + 1)
  }

  function setNewsData () {
    if (data === undefined) return;
    const { news:newNews, areThereMoreNews } = data.data;
    if (newNews.length === 0) return;
    if (news.length === 0) {
      setFirstNew(newNews[0]);
      const newsWithoutFirst = newNews;
      newsWithoutFirst.shift();
      setNews(newsWithoutFirst);
    } else {
      setNews([ ...news, ...newNews ]);
    }
    setIsButtonEnabled(areThereMoreNews)
  }

  return (
    <GlobalContainer title='Noticias'>
      { (news.length > 0 && firstNew !== null) && <MainNew {...firstNew}/>}
      { (news.length > 0) && <MoreNews news={news} isButtonEnabled={isButtonEnabled} updateTab={updateTab} isLoading={isLoading}/> }
      { (isLoading && data === undefined) && <LoadingScreen/> }
    </GlobalContainer>
  )
}
