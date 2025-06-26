import React, { useEffect, useRef, useState } from "react";
import { pexelsAPI } from "../../../../shared/services/PexelsService";
import PhotoItem from "../../../../shared/components/PhotoItem/PhotoItem";
import cl from "./MainPagePhotosContainer.module.css"
import { useObserver } from "../../../../shared/hooks/useObserver";
import Loader from "../../../../shared/components/Loader/Loader";

const PhotosContainer = () => {
  const [page, setPage] = useState(1);
  const lastElement = useRef<HTMLDivElement | null>(null);
  const [columns, setColumns] = useState<any[][]>([[], [], []]);

  const [fetchPhotos, { data, isLoading, isFetching, isError }] =
    pexelsAPI.useLazyGetPhotosQuery();

  useEffect(() => {
    fetchPhotos({ perPage: 15, page });
  }, [page, fetchPhotos]);

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
      <div className={cl.photos_container}>
        <div className={cl.photos_list}>
          {isLoading && <h1> Loading...</h1>}
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
      {isFetching && page > 1 && <Loader/>}
      <div ref={lastElement} style={{ height: 10 }}></div>
    </>
  );
};

export default PhotosContainer;
