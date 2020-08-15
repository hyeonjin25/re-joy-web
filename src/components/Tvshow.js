import React from 'react';   
import PropTypes from "prop-types";
import './reset.css';
import './Tvshow.css';

function Tvshow({name, summary, image, genres, rating}){
    return (
    <div className="tvshow">
        <img className="image" src={image} alt={name} title={name} />
        <div className="tvshow_data">
            <h3 className="tvshow_name">{name.slice(0,25)}{(name.length>28)?"...":""}</h3>
            <div className="tvshow_rating">
                <img className="star_icon" src={ require("../img/star_icon.png") } alt="rating"/>
                <h5 className="rating_text">{rating}</h5>
            </div>
        </div>
    </div>
    );
}

Tvshow.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    //rating: PropTypes.number.isRequired
}

export default Tvshow;