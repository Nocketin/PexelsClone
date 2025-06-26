import React, { useEffect, useState } from "react";
import cl from "./Navbar.module.css"
import SearchBar from "../UI/SearchBar/SearchBar";
import Navigation from "../../../../shared/components/Navigation/Navigation";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 499);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showNavbar) return null;
  else return (
    <nav className={cl.navbar}>
        <div className={cl.logo}>Pexels</div>
        <SearchBar/>
        <Navigation/>
    </nav>
  );;
};

export default Navbar;
