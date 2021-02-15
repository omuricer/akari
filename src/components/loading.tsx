import React, { useState, useEffect } from "react";

interface Props {}
const Loading: React.FC<Props> = (props) => {
  const [display, setDisplay] = useState<boolean>(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setDisplay(false);
      document.body.style.overflow = "";
    }, 3000);
  });

  if (!display) {
    return <React.Fragment></React.Fragment>;
  }
  return (
    <div id="loading">
      <div className="animation-logo">
        <img className="star" src="image/loading/star.gif" />
        <img className="building" src="image/loading/lodo.svg" />
      </div>
    </div>
  );
};
export default Loading;
