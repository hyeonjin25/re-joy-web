import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import Tvshow from "../components/Tvshow";
import '../components/reset.css';
import './Home.css';
import { render } from '@testing-library/react';
import { arrayOf } from 'prop-types';

class Home extends React.Component {
    state = {
        m_isLoding: true,
        t_isLoding: true,
        movies:[],
        tvshows:[]
    };

    getMovies = async() => {
        const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=like_count");
        this.setState({movies, m_isLoding: false});
    };

    getTvshows = async() => {
        const {data} = await axios.get("http://api.tvmaze.com/shows");
        this.setState({tvshows:data, t_isLoding: false});
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
                                        <li className="mypage"><a href="#">Mypage</a></li>
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
                                    <ul>
                                        <li><a href="https://www.netflix.com/browse" target="_blank">Netflix</a></li>
                                        <li><a href="https://play.watcha.net/" target="_blank">Watcha</a></li>
                                        <li><a href="https://www.wavve.com/" target="_blank">Wave</a></li>
                                    </ul>
                                </div>
                            </div>
                        {/* //링크 */}
                        </div>
                     </header>

                     <nav>
                        {/* 검색 */} 
                        <feildset className="search">
                            <div className="container">
                                <legend className="ir_su">search</legend>
                                <form className="search_cont">
                                <input type="text" id="input_text" placeholder="search" maxLength="50"/>
                                <button>
                                    <span className="search_button"></span>
                                </button>
                                </form>
                            </div>
                        </feildset>
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
                                                    year={movie.year} 
                                                    title={movie.title} 
                                                    summary={movie.summary} 
                                                    poster={movie.medium_cover_image}
                                                    genres={movie.genres}
                                                    rating={movie.rating}
                                                />
                                            ))}
                                        </div>
                                        <div className="tvshows">
                                            {tvshows.map(tvshow => (
                                                <Tvshow 
                                                    key={tvshow.id}
                                                    id={tvshow.id}
                                                    name={tvshow.name}
                                                    summary={tvshow.summary}
                                                    image={tvshow.image.medium}
                                                    genres={tvshow.genres}
                                                    rating={tvshow.rating.average}
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
