import React from "react";
import PropTypes from "prop-types";
import "./reset.css";
import "./Tvshow.css";

function Tvshow({ id, title, poster, summary, genres, date, rating }) {
  return (
    <div className="tvshow">
      <img
        className="poster"
        src={"https://image.tmdb.org/t/p/w500" + poster}
        alt={title}
        title={title}
      />
      <div className="tvshow_data">
        <h3 className="tvshow_title">
          {title.slice(0, 15)}
          {title.length > 15 ? "..." : ""}
        </h3>
        <div className="tvshow_rating">
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

Tvshow.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.number).isRequired,
  rating: PropTypes.number.isRequired,
};

export default Tvshow;
