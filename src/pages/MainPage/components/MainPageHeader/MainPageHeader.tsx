import React from "react";
import cl from "./MainPageHeader.module.css";
import { pexelsAPI } from "../../../../shared/services/PexelsService";
import SearchBar from "../UI/SearchBar/SearchBar";
import CategoriesContainer from "../CategoriesContainer/CategoriesContainer";
import Loader from "../../../../shared/components/Loader/Loader";
import Navigation from "../../../../shared/components/Navigation/Navigation";


const MainPageHeader = () => {
  const { data, error, isLoading } = pexelsAPI.useGetRandomPhotoQuery();

  const randomPhoto = data?.photos[0];

  return (
    <div
      className={cl.main_page_header}
      style={{
        backgroundImage: `url(${randomPhoto?.src.original})`,
      }}
    >
      {isLoading && <Loader/>}
      {error && <h1>Error with loading</h1>}
      <div className={cl.navbar}>
        Pexels
        <Navigation/>
      </div>
      <p className={cl.header_title}>
        Лучшие бесплатные стоковые фото, изображения без роялти и видео от
        талантливых авторов.
      </p>

      <SearchBar />
      <CategoriesContainer/>

      <a
        className={cl.author_link}
        href={randomPhoto?.photographer_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <span className={cl.author_title}>Автор фото — </span>{" "}
        {randomPhoto?.photographer}
      </a>
    </div>
  );
};

export default MainPageHeader;
