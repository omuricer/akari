interface Props {
  text: string;
}
const SubSubTitle: React.FC<Props> = (props) => {
  return (
    <div className="subsubtitle-area">
      <div className="subsubtitle">
        <h4 className="mdc-typography--headline4">{props.text}</h4>
        <div className="marker"></div>
      </div>
    </div>
  );
};
export default SubSubTitle;
