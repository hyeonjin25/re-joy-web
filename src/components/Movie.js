import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./reset.css";
import "./Movie.css";

function Movie({ id, title, poster, backdrop, summary, genres, adult, date, rating }) {
  return (
    <div className="space_around">
      <Link
        to={{
          pathname: "/Detail/" + title,
          state: { id, title, poster, backdrop, summary, genres, adult, date, rating },
        }}
      >
        <div className="movie">
          <img
            className="poster"
            src={"https://image.tmdb.org/t/p/w500" + poster}
            alt={title}
            title={title}
          />
          <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <div className="movie_rating">
              <img
                className="star_icon"
                src={require("../img/star_icon.png")}
                alt="rating"
              />
              <h5 className="rating_text">{rating}</h5>
            </div>
            {/*<h5 className="movie_year">{date}</h5>*/}
            {/*<ul className="genres">
                {genres.map((genre, index) => (
                <li key={index} className="genres_genre">
                    {genre}
                </li>
             ))}
            </ul>*/}
            {/* <p className="movie_summary">{summary}</p> */}
          </div>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.number).isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
