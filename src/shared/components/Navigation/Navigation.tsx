import React from 'react'
import cl from "./Navigation.module.css"
const Navigation = () => {
  return (
    <div className={cl.navigation}>
          <div className={cl.nav_button}>
            Поиск фото
          </div>
          <div className={cl.nav_button}>
            Лицензия
          </div>
          <div className={cl.nav_button}>
            Загрузка
          </div>
          <div className={cl.nav_button}>
            ...
          </div>
          <div className={cl.nav_button}>
            Присоединиться 
          </div>
        </div>
  )
}

export default Navigation