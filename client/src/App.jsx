import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Info from './pages/Info'
import Quiz from './pages/Quiz'
import TechTuesday from './pages/TechTuesday'

const App = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/home/info' element={<Info/>}></Route>
        <Route path='/home/quiz' element={<Quiz/>}></Route>
        <Route path='/home/techtuesday' element={<TechTuesday/>}></Route>
    </Routes>
  )
}

export default App
