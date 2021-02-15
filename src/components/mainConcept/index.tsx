import Image from "next/image";
import style from "./index.module.scss";
import classNames from "classnames";

interface Props {}
const MainConcept: React.FC<Props> = (props) => {
  return (
    // <div>
    //   <div style={{ position: "fixed", zIndex: -1 }}>
    //     <Image
    //       alt="Mountains"
    //       src="/image/concept_main.jpg"
    //       width={600}
    //       height={600}
    //       // layout="fill"
    //       // objectFit="cover"
    //       // quality={100}
    //     />
    //   </div>
    // </div>
    <div className={classNames("mdc-layout-grid", style.no_margin)}>
      <div className={classNames("mdc-layout-grid__inner", style.fixed_bg)}>
        <Image
          alt="Mountains"
          src="/image/concept_main.jpg"
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
            <p className={classNames("mdc-typography--headline2", style.main)}>
              ともに学びあう
            </p>
            <p className={classNames("mdc-typography--body1", style.text)}>
              ひとりひとりの想いが灯る、アカリ
              <br />
              <br />
              眠っていた元書庫の施設が
              <br />
              リノベ－ションにより学びあいの場へと生まれ変わりました
              <br />
              <br />
              多様な価値観が交差し、新しいモノ・コトが生まれる
              <br />
              多様な人との出会い、多様な文化との接点に、あなたもお越しください
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainConcept;
