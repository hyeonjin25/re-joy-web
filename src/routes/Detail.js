import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    //컨텐츠 클릭을 통해 페이지로 들어온게 아닌경우 강제로 홈으로 이동시킴(state가 undefined일 떄)
    if (location.state === undefined) {
      history.push("/");
    }
    console.log("effect");
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div>
          <div className="movie">
            <img
              className="poster"
              src={"https://image.tmdb.org/t/p/w500" + location.state.poster}
              alt={location.state.title}
              title={location.state.title}
            />
            <div className="movie_data">
              <h3 className="movie_title">{location.state.title}</h3>
              <div className="movie_rating">
                <img
                  className="star_icon"
                  src={require("../img/star_icon.png")}
                  alt="rating"
                />
                <h5 className="rating_text">{location.state.rating}</h5>
              </div>
              <h5 className="movie_year">{location.state.date}</h5>
              <ul className="genres">
                {/* {genres.map((genre, index) => (
           <li key={index} className="genres_genre">
               {location.state.genre}
           </li>
        ))} */}
              </ul>
              <p className="movie_summary">{location.state.summary}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
