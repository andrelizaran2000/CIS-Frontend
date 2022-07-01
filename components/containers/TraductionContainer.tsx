// Modules
import React, { ReactNode } from 'react';

// Traduction
import i18next from 'i18next';;
import { I18nextProvider } from 'react-i18next';

// Texts
import index_es from '../../traductions/index_es.json';
import about_us_es from '../../traductions/about_us_es.json';
import news_es from '../../traductions/news_es.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',                             
  resources: {
    es: { 
      index: index_es,
      aboutUs: about_us_es,
      news: news_es 
    },
  },
});

type Props = {
  children:ReactNode
}

export default function TraductionContainer({ children }:Props) {
  return (
    <I18nextProvider i18n={i18next}>
      { children }
    </I18nextProvider>
  )
}
