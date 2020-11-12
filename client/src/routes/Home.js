import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Searchbar from "../components/view/Searchbar";
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
  }

  //로그아웃
  logout = () => {
    Cookies.remove("login_id");
    window.location.reload();
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
      <section className='cont'>
        {m_isLoding && t_isLoding ? (
          <div className='loder'>
            {/* 로딩창 */}
            <span className='loder_text'>Lodding...</span>
            {/* //로딩창 */}
          </div>
        ) : (
          <div className='Home'>
            <div id='wrap'>
              <Searchbar />
              <main>
                {/* 추천 */}
                <div className='recommend'>
                  <div className='container'>
                    <div className='glass'></div>
                    <div className='glass second_glass'></div>
                    <section>
                      <div>
                        <h3 className='ir_su'>recommend</h3>
                        <div className='movies'>
                          <h3 className='recommend_sort_title'>추천 영화</h3>
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
                        <div className='tvshows'>
                          <h3 className='recommend_sort_title'>추천 티비쇼</h3>
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
                <div className='category'>
                  <div className='container'>
                    <section>
                      <h3 className='ir_su'>분류</h3>
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
