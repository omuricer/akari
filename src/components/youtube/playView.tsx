import React, { useState, useEffect } from "react";
import YouTube, { Options } from "react-youtube";
import Image from "components/form/image";

export interface IPlayViewProps {
  videoId: string | undefined;
  opts?: Options;
  isMobile: boolean;
}
const PlayView: React.FC<IPlayViewProps> = (props) => {
  const opts: Options = {
    ...{
      height: props.isMobile ? "auto" : "390",
      width: props.isMobile ? "100%" : "640",
      playerVars: {
        autoplay: 1,
      },
    },
    ...props.opts,
  };
  return (
    <React.Fragment>
      {props.videoId ? (
        <YouTube
          videoId={props.videoId}
          opts={opts}
          onReady={(e) => {
            // e.target.pauseVideo();
          }}
        />
      ) : (
        <Image
          src={"image/fukushimabonchi/un_start.jpg"}
          height={props.isMobile ? "auto" : "390"}
          width={props.isMobile ? "100%" : "640"}
        />
      )}
    </React.Fragment>
  );
};
export default PlayView;
