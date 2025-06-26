import React from 'react'
import cl from "./CategoryPageNavbar.module.css"
import Navigation from '../../../../shared/components/Navigation/Navigation'
import CategoryPageSearchBar from '../UI/CategoryPageSearchBar/CategoryPageSearchBar'

const CategotyPageNavbar = () => {
  return (
    <nav className={cl.navbar}>
        <div className={cl.logo}>Pexels</div>
        <CategoryPageSearchBar/>
        <Navigation/>
    </nav>
  )
}

export default CategotyPageNavbar



