import React, { useState, useEffect } from "react";
import { TSearchResponse } from "components/youtube/api";
import Thumbnail from "components/youtube/thumbnail";

export interface IThumbnailsProps {
  videos: TSearchResponse;
  setPlayVideoId: (videoId: string) => void;
}
const Thumbnails: React.FC<IThumbnailsProps> = (props) => {
  const thumbnails = props.videos.map((v) => {
    return (
      <Thumbnail
        url={v.thumbnail.url}
        onClick={() => {
          props.setPlayVideoId(v.videoId);
        }}
      />
    );
  });

  return <React.Fragment>{thumbnails}</React.Fragment>;
};
export default Thumbnails;
