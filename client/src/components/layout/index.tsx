import React from 'react';
import { Footer } from './Footer';


export const MainLayout = (props) => {
  const { children } = props

  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}
