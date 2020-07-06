import React, { Component, Fragment } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        View more upcomming releases &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.imdb.com/calendar/?region=gb"
        >
          >>
        </a>
      </div>
    );
  }
}
