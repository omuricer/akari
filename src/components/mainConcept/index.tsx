import Image from "next/image";
import style from "./index.module.scss";
import classNames from "classnames";

interface Props { }
const MainConcept: React.FC<Props> = (props) => {
  return (
    <div className={classNames("mdc-layout-grid", style.no_margin)}>
      <div className={classNames("mdc-layout-grid__inner", style.fixed_bg)}>
        <Image
          alt="Mountains"
          src="/image/concept_main.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div
        className={classNames("mdc-layout-grid__inner", style.fixed_bg_dummy)}
      >
        <div className="mdc-layout-grid__cell--span-12">
          <div className={style.concept_text}>
            <p className={classNames("mdc-typography--body1", style.text)} style={{ marginBottom: "1rem" }}>
              元縫製工場をリノベーションして、
              <br />
              学びの複合施設として生まれ変わりました。
            </p>
            <p className={classNames("mdc-typography--body1", style.text)}>
              空間も価値観もシェアして、
              <br />
              １人１人の「想い」が灯る場所に。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainConcept;
