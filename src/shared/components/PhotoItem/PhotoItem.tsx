import React, { FC } from "react";
import { IPhoto } from "../../models/IPhoto";
import cl from "./PhotoItem.module.css";
import downloadIcon from "../../assets/svg/download_icon.svg";
import heartIcon from "../../assets/svg/heart-thin-icon.svg";
import boxIcon from "../../assets/svg/box_icon.svg";
import redHeartIcon from "../../assets/svg/red-heart-icon.svg";
import { useImageDownload } from "../../hooks/useImageDownload";
import { usePhotoLike } from "../../hooks/usePhotoLike";

interface PhotoItemProps {
  photo: IPhoto;
}

const PhotoItem: FC<PhotoItemProps> = ({ photo }) => {

  const {downloadImage} = useImageDownload();
  const {liked, toggleLike} = usePhotoLike(photo.id)


  return (
    <div className={cl.photo}>
      <img src={photo.src.large} alt={photo.alt || ""} />

      <div className={cl.photo_overlay}>
        <a
          href={photo.photographer_url}
          target="_blank"
          rel="noopener noreferrer"
          className={cl.photo_photographerLink}
          onClick={(e) => e.stopPropagation()}
        >
          {photo.photographer}
        </a>
        <div className={cl.buttons_container}>
          <button className={cl.overlay_button}>
            <img src={downloadIcon} alt="downloadButton" onClick={() => downloadImage(photo.src.original, `photo-${photo.id}.jpg`)} />
          </button>
          <button className={cl.overlay_button}>
            <img src={boxIcon} alt="saveButton" />
          </button>
          <button className={cl.overlay_button} onClick={toggleLike}>
            <img src={ liked? redHeartIcon: heartIcon} alt="likeButton" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoItem;
