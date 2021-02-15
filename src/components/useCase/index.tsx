import React from "react";
import { UseCase as UseCaseModel } from "domain/model/useCase";
import style from "./index.module.scss";
import Image from "next/image";

interface Props extends UseCaseModel {}
const UseCase: React.FC<Props> = (props) => {
  return (
    <>
      <div className={style.root}>
        <div className={style.image}>
          <a href={props.more.url}>
            <Image
              src={props.image}
              width={600}
              height={600}
              className={style.img}
            />
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
