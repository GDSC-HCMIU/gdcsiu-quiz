import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Info from './pages/Info'
import Quiz from './pages/Quiz'
import TechTuesday from './pages/TechTuesday'
import { MainLayout } from './components/layout';
import { ROUTING } from './constants'

const routes = [
  {
    path: ROUTING.HOME, element:
      <MainLayout>
        <Home />
      </MainLayout>
  },
  {
    path: ROUTING.INFO, element:  <Info /> },
  {
    path: ROUTING.QUIZ, element: <Quiz />
  },
  {
    path: ROUTING.TECH, element:
      <MainLayout>
        <TechTuesday />
      </MainLayout>
  },


]
const App = () => {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route path={route.path} element={route.element} key={route.path} />
        )
      })}
    </Routes>
  )
}

export default App
