import { useState, useEffect } from "react";

export const usePhotoLike = (photoId: number) => {
  const localStorageKey = `liked-photo-${photoId}`;
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const isLiked = localStorage.getItem(localStorageKey);
    setLiked(isLiked === "true");
  }, [localStorageKey]);

  const toggleLike = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const newLiked = !liked;
    setLiked(newLiked);
    localStorage.setItem(localStorageKey, newLiked.toString());
  };

  return { liked, toggleLike };
};
