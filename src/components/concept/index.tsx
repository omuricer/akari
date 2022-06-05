import FadeOnScroll from "components/fadeOnScroll";
import Image from "next/image";
import style from "./index.module.scss";
import classNames from "classnames";

interface Props {
  main_accent: string;
  main: string;
  sub: string;
  image: string;
  reverse: boolean;
}
const Concept: React.FC<Props> = (props) => {
  const rootClasses = [
    "mdc-layout-grid__cell--span-6-desktop",
    "mdc-layout-grid__cell--span-8-tablet",
    "mdc-layout-grid__cell--span-4-phone",
  ];
  let reverseSuffix = "";
  if (props.reverse) reverseSuffix = "-reverse";
  return (
    <div className={classNames(rootClasses)}>
      <FadeOnScroll>
        <div className={classNames(style["root" + reverseSuffix])}>
          <div className={style["opacity" + reverseSuffix]}>
            <p className={classNames(style["label" + reverseSuffix])}>
              <span>{props.main_accent}</span>
              {props.main}
            </p>
            <p className={classNames(style["text" + reverseSuffix])}>
              {props.sub}
            </p>
          </div>
          <div className={classNames(style["image" + reverseSuffix])}>
            <Image src={props.image} width={600} height={400} />
          </div>
        </div>
      </FadeOnScroll>
    </div>
  );
};
export default Concept;
