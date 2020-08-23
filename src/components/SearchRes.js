import React from "react";
import PropTypes from "prop-types";
import "./reset.css";
import "./Movie.css";

function SearchRes({ id, title, poster, summary, genres, date, rating }) {
  return (
      <div className="movie" style={{marginLeft:13, marginRight:13}}>
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
        </div>
      </div>
  );
}

SearchRes.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.number).isRequired,
  rating: PropTypes.number.isRequired,
};

export default SearchRes;
