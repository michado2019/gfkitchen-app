import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../home/Home'

const AppRouter = () => {
  return (
    <div style={{padding: '20px 20px'}}>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default AppRouter