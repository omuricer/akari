import React from "react";
import "./button.scss";

export default class Button extends React.Component {
  render() {

    return (
      <a
        className="mdc-button mdc-button--raised right"
        href={this.props.href}
        target={this.props.target}
      >
        {this.props.label}
      </a>
    );
  }
}

Button.defaultProps = { 
  href: "#",
  target: "blank_",
  label: "button",
};
