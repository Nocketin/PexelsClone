import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './Routes'
import MainPage from '../pages/MainPage/MainPage'


const AppRouter = () => {
  return (
    <Routes>
        {routes.map(({ path, element }) => 
        <Route key={path} path={path} element={element} />
      )}
      <Route path="*" element={<MainPage/>} />
    </Routes>
  )
}

export default AppRouter