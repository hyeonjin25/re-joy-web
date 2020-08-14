import React from 'react';   
import PropTypes from "prop-types";
import './reset.css';
import './Movie.css';

function Movie({year, title, summary, poster, genres, rating}){
    return (
    <div className="movie">
        <img className="poster" src={poster} alt={title} title={title} />
        <div className="movie_data">
            <h3 className="movie_title">{title.slice(0,25)}{(title.length>28)?"...":""}</h3>
            <div className="movie_rating">
                <img className="star_icon" src={ require("../img/star_icon.png") } alt="rating"/>
                <h5 className="rating_text">{rating}</h5>
            </div>
            {/*<h5 className="movie_year">{year}</h5>*/}
            {/*<ul className="genres">
                {genres.map((genre, index) => (
                <li key={index} className="genres_genre">
                    {genre}
                </li>
             ))}
            </ul>*/}
            {/*<p className="movie_summary">{summary}</p>*/}
        </div>
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;