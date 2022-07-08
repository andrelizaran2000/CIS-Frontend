// Modules
import React, { ReactNode } from 'react'

// Containers
import BarContainer from './BarContainer';
import HeadContainer from './HeadContainer';
import TraductionContainer from './TraductionContainer';

type Props = {
  title:string;
  children:ReactNode
}

export default function GlobalContainer ({ title, children }:Props) {
  return (
    <TraductionContainer>
      <HeadContainer title={title}>
        <BarContainer>
          {children}
        </BarContainer>
      </HeadContainer>
    </TraductionContainer>
  )
}
