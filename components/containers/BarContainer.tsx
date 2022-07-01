// Modules
import React, { ReactNode } from 'react'

// Components
import CisBar from '../shared/CisBar'

type Props = {
  children:ReactNode
}

export default function BarContainer ({ children }:Props) {
  return (
    <>
      <CisBar/>
      {children}
    </>
  )
}
