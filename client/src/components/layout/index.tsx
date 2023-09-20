import React from 'react';
import { Footer } from './Footer';


export const MainLayout = (props) => {
  const { children } = props

  return (
    <React.Fragment>
      {children}
      <Footer />
    </React.Fragment>
  )
}
