import React, { Component } from "react";
import Film from "./Film";

export default class FilmList extends Component {
  render() {
    // loop through our array of films getting the info we need
    const filmNodes = this.props.films.map((film) => {
      return (
        <Film
          // We need unique keys for our list just like in Vue
          key={film.id}
          url={film.url}
          name={film.name}
        ></Film>
      );
    });

    return <ul className="film-list">{filmNodes}</ul>;
  }
}
