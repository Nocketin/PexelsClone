import React from 'react'
import MainPageHeader from './components/MainPageHeader/MainPageHeader'
import PhotosContainer from './components/MainPagePhotosContainer/MainPagePhotosContainer'
import cl from './MainPage.module.css'
import Navbar from './components/MainPageNavbar/Navbar'

const MainPage = () => {
  return (
    <div className={cl.main_page}>
      <Navbar/> 
      <MainPageHeader/>
      <PhotosContainer/>
    </div>
  )
}

export default MainPage