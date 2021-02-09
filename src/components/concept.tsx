import FadeOnScroll from "components/fadeOnScroll";
interface Props {
  main_accent: string;
  main: string;
  sub: string;
  image: string;
  reverse: boolean;
}
const Concept: React.FC<Props> = (props) => {
  const reverse = props.reverse ? " reverse" : "";
  const classString = `mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone concept ${reverse}`;
  return (
    <div className={classString}>
      {/* TODO: Fade入れると消える */}
      {/* <FadeOnScroll> */}
      <div className="main">
        <span className="accent">{props.main_accent}</span>
        {props.main}
      </div>
      <div className="text">
        <p>{props.sub}</p>
      </div>
      <img src={props.image} />
      {/* </FadeOnScroll> */}
    </div>
  );
};
export default Concept;
