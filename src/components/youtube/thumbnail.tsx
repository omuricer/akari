import React, { useState, useEffect } from "react";

export interface IThumbnailProps {
  url: string;
  onClick: () => void;
}
const Thumbnail: React.FC<IThumbnailProps> = (props) => {
  return (
    <div onClick={props.onClick}>
      <img src={props.url} />
    </div>
  );
};
export default Thumbnail;
