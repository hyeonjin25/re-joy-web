import React from "react";
import axios from "axios";
import $ from "jquery";
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
    query_results: "",
  };

  getMovies = async () => {
    const movieUrl =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=9aa38313510a50c3ae30091b52efcc90&language=ko&page=1®ion=KR";

    const {
      data: { results },
    } = await axios.get(movieUrl);
    this.setState({ movies: results, m_isLoding: false });
  };

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
  }

  onSearch_click = async () => {
    const serchUrl =
      "https://api.themoviedb.org/3/search/multi?api_key=9aa38313510a50c3ae30091b52efcc90&query="+this.state.query+"&page=1&include_adult=false"
    await axios
      .get(serchUrl)
      .then((response) => {
        this.setState({ query_results: response.data.results });
        console.log(this.state.query_results);
      })
      .catch((errer) => {
        console.log("errer: ", errer.message);
      });
  };

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
              <header>
                <div className="header">
                  {/* 헤더메뉴 */}
                  <div className="header_top">
                    <div className="container">
                      <ul>
                        <Link
                          to={{
                            pathname: "/Login",
                            state: {},
                          }}
                        >
                          <li className="login">로그인</li>
                        </Link>
                        <Link
                          to={{
                            pathname: "/Join",
                            state: {},
                          }}
                        >
                          <li className="join">회원가입</li>
                        </Link>
                        <Link
                          to={{
                            pathname: "/Mypage",
                            state: {},
                          }}
                        >
                          <li className="mypage">마이페이지</li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                  {/* //헤더메뉴 */}
                  {/* 웹 이름 */}
                  <div className="header_center">
                    <div className="container">
                      <Link
                        style={{ textDecoration: "none" }}
                        to={{
                          pathname: "/",
                        }}
                      >
                        <h1>re-joy</h1>
                      </Link>
                    </div>
                  </div>
                  {/* //웹 이름 */}
                </div>
              </header>

              <nav>
                {/* 검색 */}
                <fieldset className="search">
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
                {/* 메뉴 */}
                <div className="menu">
                  <div className="container">
                    <h2 className="ir_su">menu</h2>
                  </div>
                </div>
                {/* //메뉴 */}
              </nav>

              <main>
                {/* 추천 */}
                <div className="recommend">
                  <div className="container">
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
                                genres={movie.genre_ids}
                                rating={movie.vote_average}
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
                                genres={tvshow.genre_ids}
                                rating={tvshow.vote_average}
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
                      <h3>분류</h3>
                    </section>
                  </div>
                </div>
                {/* //분류 */}
              </main>
              <footer>
                <div className="footer">
                  <div className="container">
                    <h2>푸터</h2>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Home;
