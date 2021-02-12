import React, { HTMLAttributes } from "react";
import classNames from "classnames";
import moment from "moment";
interface Props extends HTMLAttributes<HTMLDivElement> {
  value: Date;
}
export const FORMAT = "YYYY/M/D";
const News: React.FC<Props> = (props) => {
  const { value, ...divProps } = props;
  return (
    <div {...divProps} className={classNames(props.className)}>
      {moment(value).format(FORMAT)}
    </div>
  );
};
export default News;
