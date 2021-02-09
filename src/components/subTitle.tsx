interface Props {
  text: string;
}
const SubTitle: React.FC<Props> = (props) => {
  return (
    <div className="mdc-layout-grid__inner">
      <div className="mdc-layout-grid__cell--span-12 subtitle-area">
        <div className="subtitle">
          <h3 className="mdc-typography--headline3">{props.text}</h3>
          <div className="marker"></div>
        </div>
      </div>
    </div>
  );
};
export default SubTitle;
