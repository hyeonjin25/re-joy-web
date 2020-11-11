import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import Tvshow from "../components/Tvshow";
import "../components/reset.css";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slick from "react-slick";

class Home extends React.Component {
  state = {
    m_isLoding: true,
    t_isLoding: true,
    movies: [],
    tvshows: [],
    query: "",
    is_logined: false,
  };

  //영화 api가져오기(tmdb)
  getMovies = async () => {
    const movieUrl =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=9aa38313510a50c3ae30091b52efcc90&language=ko&page=1®ion=KR";

    const {
      data: { results },
    } = await axios.get(movieUrl);
    this.setState({ movies: results, m_isLoding: false });
    //console.log(results);
  };

  //티비 프로그램 api가져오기(tmdb)
  getTvshows = async () => {
    const tvshowUrl =
      "https://api.themoviedb.org/3/tv/on_the_air?api_key=9aa38313510a50c3ae30091b52efcc90&language=ko&page=1";

    const {
      data: { results },
    } = await axios.get(tvshowUrl);
    this.setState({ tvshows: results, t_isLoding: false });
  };

  componentDidMount() {
    this.getMovies();
    this.getTvshows();
    //로그인이 되어있는지 확인하기
    if (Cookies.get("login_id")) {
      //로그인 되어있을 경우
      this.setState({
        is_logined: true,
      });
    }
    console.log(Cookies.get);
  }

  logout = () => {
    Cookies.remove("login_id");
    window.location.reload();
  };

  //검색 버튼 누를 시(onClick)
  onSearch_click = async () => {
    //검색어 입력 했을시에만
    if (this.state.query !== "") {
      this.props.history.push({
        pathname: "/Search/" + this.state.query,
        state: this.state.query,
      });
    }
  };

  //검색창에 데이터 입력시(onChange)
  onSearch = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { m_isLoding, t_isLoding, movies, tvshows } = this.state;
    const slick_settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: false,
    };

    return (
      <section className="cont">
        {m_isLoding && t_isLoding ? (
          <div className="loder">
            {/* 로딩창 */}
            <span className="loder_text">Lodding...</span>
            {/* //로딩창 */}
          </div>
        ) : (
          <div className="Home">
            <div id="wrap">
              <nav>
                {/* 검색 */}
                <fieldset id="search">
                  <div className="container">
                    <legend className="ir_su">search</legend>
                    <form className="search_cont">
                      <input
                        type="text"
                        value={this.state.query}
                        onChange={this.onSearch}
                        id="input_search"
                        placeholder="search"
                        maxLength="50"
                      />
                      <button type="submit" onClick={this.onSearch_click}>
                        <span className="search_button"></span>
                      </button>
                    </form>
                  </div>
                </fieldset>
                {/* //검색 */}
              </nav>

              <main>
                {/* 추천 */}
                <div className="recommend">
                  <div className="container">
                    <div className="glass"></div>
                    <div className="glass second_glass"></div>
                    <section>
                      <div>
                        <h3 className="ir_su">recommend</h3>
                        <div className="movies">
                          <h3 className="recommend_sort_title">추천 영화</h3>
                          <Slick {...slick_settings}>
                            {movies.map((movie) => (
                              <Movie
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                date={movie.release_date}
                                summary={movie.overview}
                                poster={movie.poster_path}
                                backdrop={movie.backdrop_path}
                                genres={movie.genre_ids}
                                rating={movie.vote_average}
                                adult={movie.adult}
                              />
                            ))}
                          </Slick>
                        </div>
                        <div className="tvshows">
                          <h3 className="recommend_sort_title">추천 티비쇼</h3>
                          <Slick {...slick_settings}>
                            {tvshows.map((tvshow) => (
                              <Tvshow
                                key={tvshow.id}
                                id={tvshow.id}
                                title={tvshow.name}
                                date={tvshow.first_air_date}
                                summary={tvshow.overview}
                                poster={tvshow.poster_path}
                                backdrop={tvshow.backdrop_path}
                                genres={tvshow.genre_ids}
                                rating={tvshow.vote_average}
                                adult={tvshow.adult}
                              />
                            ))}
                          </Slick>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                {/* //추천 */}
                {/* 분류 */}
                <div className="category">
                  <div className="container">
                    <section>
                      <h3 className="ir_su">분류</h3>
                    </section>
                  </div>
                </div>
                {/* //분류 */}
              </main>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Home;
