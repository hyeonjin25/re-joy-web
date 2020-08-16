import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import Tvshow from "../components/Tvshow";
import '../components/reset.css';
import './Home.css';

class Home extends React.Component {
    state = {
        m_isLoding: true,
        t_isLoding: true,
        movies:[],
        tvshows:[]
    };

    getMovies = async() => {
        const {data: {results}} = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=9aa38313510a50c3ae30091b52efcc90&language=ko&page=1®ion=KR");
        this.setState({movies:results, m_isLoding: false});
    };

     getTvshows = async() => {
         const {data: {results}} = await axios.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=9aa38313510a50c3ae30091b52efcc90&language=ko&page=1");
         this.setState({tvshows:results, t_isLoding: false});
     };

    componentDidMount() {
        this.getMovies();
        this.getTvshows();
    }
    
    render() {
        const {m_isLoding, t_isLoding, movies, tvshows} = this.state;
        return(
            <section className="cont">
                {(m_isLoding&&t_isLoding)
                 ? (<div className="loder">
                    {/* 로딩창 */}
                     <span className="loder_text">Lodding...</span>
                    {/* //로딩창 */}
                 </div>
                 ):(
                    <div className="Home">
                    <div id="wrap">
                      <header>
                        <div className="header">
                        {/* 로그인 */}
                            <div className="header_top">
                                <div className="container">
                                    <ul>
                                        <li className="login"><a href="#">Login</a></li>
                                        <Link to={{
                                            pathname: "/Mypage",
                                            state: {

                                            }
                                        }}><li className="mypage">Mypage</li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        {/* //로그인 */}
                        {/* 웹 이름 */}
                            <div className="header_center">
                                <div className="container">
                                    <h1><a href="#">Re-joy</a></h1>
                                </div>
                            </div>
                        {/* //웹 이름 */}
                        {/* 링크 */}
                            <div className="linker">
                                <div className="container">
                                    {/* <ul>
                                        <li><a href="https://www.netflix.com/browse" target="_blank">Netflix</a></li>
                                        <li><a href="https://play.watcha.net/" target="_blank">Watcha</a></li>
                                        <li><a href="https://www.wavve.com/" target="_blank">Wave</a></li>
                                    </ul> */}
                                </div>
                            </div>
                        {/* //링크 */}
                        </div>
                     </header>

                     <nav>
                        {/* 검색 */} 
                        <fieldset className="search">
                            <div className="container">
                                <legend className="ir_su">search</legend>
                                <form className="search_cont">
                                <input type="text" id="input_search" placeholder="search" maxLength="50"/>
                                <button>
                                    <span className="search_button"></span>
                                </button>
                                </form>
                            </div>
                        </fieldset>
                        {/* //검색 */}
                        {/* 메뉴 */}
                        <div className="menu">
                            <div className="container">
                                 <h2>menu</h2>
                             </div>
                         </div>
                        {/* //메뉴 */}
                     </nav>

                     <div id="content">
                        {/* 추천 */}
                        <div className="recommend">
                            <div className="container">
                                 <section>
                                     <div>
                                        <h3 className="ir_su">recommend</h3>
                                        <div className="movies">
                                            {movies.map(movie => (
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
                                        </div>
                                        <div className="tvshows">
                                            {tvshows.map(tvshow => (
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
                     </div>
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
