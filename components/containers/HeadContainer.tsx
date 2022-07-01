// Modules
import Head from 'next/head'
import React, { ReactNode } from 'react'

type Props = {
  title:string;
  children:ReactNode;
}

export default function HeadContainer ({ children, title }:Props) {
  return (
    <>
      <Head>
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        /> */}
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}
