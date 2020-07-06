import React, { Component } from "react";
import { render } from "@testing-library/react";

export default class Film extends Component {
  render() {
    return (
      <li className="film">
        <h4>
          <a target="_blank" rel="noopener noreferrer" href={this.props.url}>
            {this.props.name}
          </a>
        </h4>
      </li>
    );
  }
}
