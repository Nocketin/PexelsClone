import React, { useEffect, useRef, useState } from "react";
import { pexelsAPI } from "../../../../shared/services/PexelsService";
import PhotoItem from "../../../../shared/components/PhotoItem/PhotoItem";
import cl from "./CategoryPagePhotoContainer.module.css";
import { useObserver } from "../../../../shared/hooks/useObserver";
import Loader from "../../../../shared/components/Loader/Loader";
import { useParams } from "react-router-dom";

const CategoryPhotosContainer = () => {
  const { query } = useParams<{ query: string }>();
  const [page, setPage] = useState(1);
  const lastElement = useRef<HTMLDivElement | null>(null);
  const [columns, setColumns] = useState<any[][]>([[], [], []]);
  const [orientation, setOrientation] = useState<string | undefined>(undefined);
  const [size, setSize] = useState<string | undefined>(undefined);

  const [fetchSearchPhotos, { data, isLoading, isFetching, isError }] =
    pexelsAPI.useLazySearchPhotosQuery();

  

  useEffect(() => {
    if (query) {
      setColumns([[], [], []]);
      setPage(1);
      fetchSearchPhotos({
        query: query,
        perPage: 15,
        page: 1,
        orientation,
        size,
      });
    }
  }, [query, fetchSearchPhotos, orientation, size]);

  useEffect(() => {
    if (query) {
      fetchSearchPhotos({ query: query, perPage: 15, page, orientation, size });
    }
  }, [query, page, fetchSearchPhotos, orientation, size]);

  useEffect(() => {
    if (data?.photos) {
      const newColumns = [...columns];
      data.photos.forEach((photo, i) => {
        newColumns[i % 3].push(photo);
      });
      setColumns(newColumns);
    }
  }, [data]);

  useObserver(lastElement, true, isFetching, () => {
    setPage((prev) => prev + 1);
  });

  return (
    <>
      <div className={cl.options}>
        <div className={cl.options_container}>
          <div className={cl.option}> Фото </div>
          <div className={cl.option}> Видео </div>
          <div className={cl.option}> Пользователи </div>
        </div>

        <div className={cl.options_container}>
          <select
            className={cl.option}
            value={orientation || ""}
            onChange={(e) =>
              setOrientation(e.target.value || undefined)
            }
          >  
            <option value={""}> Любая </option>
            <option value={"landscape"}> Пейзаж </option>
            <option value={"portrait"}> Потрет </option>
            <option value={"square"}> Квадрат </option>
          </select>
          
          <select
            className={cl.option}
            value={size || ""}
            onChange={(e) =>
              setSize(e.target.value || undefined)
            }
          >  
            <option value={""}> Любой </option>
            <option value={"small"}> Маленький </option>
            <option value={"medium"}> Средний </option>
            <option value={"large"}> большой </option>
          </select>
          <div className={cl.option}> Цвет</div>
        </div>
      </div>

      <h1 className={cl.title}> Фотографии {query}</h1>
      <div className={cl.photos_container}>
        <div className={cl.photos_list}>
          {isLoading && <Loader />}
          {isError && <h1>Error with loading</h1>}

          {columns.map((column, cloumnId) => (
            <div className={cl.column} key={cloumnId}>
              {column.map((photo) => (
                <PhotoItem key={photo.id} photo={photo} />
              ))}
            </div>
          ))}
        </div>
      </div>
      {isFetching && page > 1 && <Loader />}
      <div ref={lastElement} style={{ height: 10 }}></div>
    </>
  );
};

export default CategoryPhotosContainer;
