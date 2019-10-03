import React from "react";

import "./footer.scss";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="wrap">
          <p className="corporate">家守舎桃ノ音</p>
          <p className="copyright">
            © Copyright 2019 yamorishamomonone All rights reserved.
          </p>
        </div>
      </div>
    );
  }
}
