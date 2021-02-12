import React from "react";
import { News as NewsModel } from "domain/model/news";
import Date from "components/date";
import style from "./index.module.scss";

interface Props extends NewsModel {}
const News: React.FC<Props> = (props) => {
  return (
    <>
      <div className={style.root}>
        <div className={style.image}>
          <a href={props.more.url}>
            <img src={props.image} />
          </a>
        </div>
        <Date value={props.date} className={style.date} />
        <div className={style.text}>
          <p>{props.text}</p>
        </div>
        <div className={style.more}>
          <a href={props.more.url}>{props.more.text}</a>
        </div>
      </div>
    </>
  );
};
export default News;
