import React from "react";
interface Props {
  image: string;
  date: string;
  text: string;
  more: {
    url: string;
    text: string;
  };
}
const News: React.FC<Props> = (props) => {
  return (
    <>
      {/* <div
        className="
      mdc-layout-grid__cell--span-3-desktop
      mdc-layout-grid__cell--span-8-tablet
      mdc-layout-grid__cell--span-4-phone
      news
      "
      > */}
      <div className="news">
        <div className="image">
          <a href={props.more.url}>
            <img src={props.image} />
          </a>
        </div>
        <div className="date">{props.date}</div>
        <div className="text">
          <p>{props.text}</p>
        </div>
        <div className="more">
          <a href={props.more.url}>{props.more.text}</a>
        </div>
      </div>
    </>
  );
};
export default News;
