import React from "react";
import { UseCase as UseCaseModel } from "domain/model/useCase";
import Date from "components/date";
import style from "./index.module.scss";

interface Props extends UseCaseModel {}
const UseCase: React.FC<Props> = (props) => {
  return (
    <>
      <div className={style.root}>
        <div className={style.image}>
          <a href={props.more.url}>
            <img src={props.image} />
          </a>
        </div>
        <div className={style.date}>{props.resource}</div>
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
export default UseCase;
