import React from "react";
import { render } from "react-dom";

import Button from "./components/Buttons/button";

class App extends React.Component {
  render() {
    let text = this.props.text;

    return (
      <div>
        {text}
        <Button />
        <p>{text}aaa</p>
        <p>{text}aaa</p>
        <p>{text}aaa</p>
      </div>
    );
  }
}

App.defaultProps = { text: "Hello React!" };

let hoge = "Hello React!!!!!!!!!!!!!!!!!!!";
render(
  <div>
    <section id="header">
      <App></App>
    </section>
    <div className="mdc-top-app-bar--fixed-adjust">
      loading
      <section id="content">
        <section className="page">content</section>
      </section>
      <section id="footer">footer</section>
    </div>
  </div>,
  document.getElementById("app")
);
