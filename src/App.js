import React from 'react';
import axios from "axios";
import Movie from "./Movie"
import './reset.css';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component {
    state = {
        isLoding: true,
        movies:[]
    };

    getMovies = async() => {
        const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({movies, isLoding: false});
    };

    componentDidMount() {
        this.getMovies();
    }
    
    render() {
        const {isLoding, movies} = this.state;
        return(
            <div>
                {isLoding 
                 ? (<div className="loder">
                     <span className="loder_text">Lodding...</span>
                 </div>
                 ):(
                    <div className="App">
                    <div id="wrap">
                      <header>
                          <h1><a href="#">Re-joy</a></h1>
                          <div className="linker">
                              <ul>
                                 <li><a href="https://www.netflix.com/browse" target="_blank">넷플릭스</a></li>
                                 <li><a href="https://play.watcha.net/" target="_blank">왓챠</a></li>
                                 <li><a href="https://www.wavve.com/" target="_blank">웨이브</a></li>
                             </ul>
                         </div>
                     </header>
                     <nav>
                         <div className="container">
                             <div className="search">
                                 {/*검색*/} 
                                 <h2>search</h2>
                                 {/*검색*/}
                             </div>
                             <div className="menu">
                                 {/*메뉴 */}
                                 <h2>menu</h2>
                                 {/*메뉴*/}
                             </div>
                         </div>
                     </nav>
                     <div id="content">
                         <div className="container">
                             <div className="recommend">
                                 {/*추천 */}
                                 <section>
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
                                            />
                                        ))}
                                    </div>
                                 </section>
                                 {/*추천 */}
                             </div>
                             <div className="category">
                                 {/*분류 */}
                                 <section>
                                     <h3>분류</h3>
                                 </section>
                                 {/*분류 */}
                             </div> 
                         </div>
                     </div>
                     <footer>
                         <div className="container">
                             <div className="footer">
                                 <h2>푸터</h2>
                             </div>
                         </div>
                     </footer>
                    </div>
                 </div>                           
                 )}                        
            </div>
        );
    }

//   return (
//     <div className="App">
//       <div id="wrap">
//         <header>
//             <h1><a href="#">Movie Web</a></h1>
//             <div class="linker">
//                 <ul>
//                     <li><a href="https://www.netflix.com/browse" target="_blank">넷플릭스</a></li>
//                     <li><a href="https://play.watcha.net/" target="_blank">왓챠</a></li>
//                     <li><a href="https://www.wavve.com/" target="_blank">웨이브</a></li>
//                 </ul>
//             </div>
//         </header>
//         <nav>
//             <div class="container">
//                 <div class="search">
//                     {/*검색*/} 
//                     <h2>search</h2>
//                     {/*검색*/}
//                 </div>
//                 <div class="menu">
//                     {/*메뉴 */}
//                     <h2>menu</h2>
//                     {/*메뉴*/}
//                 </div>
//             </div>
//         </nav>
//         <div id="content">
//             <div class="container">
//                 <div class="recommend">
//                     {/*추천 */}
//                     <section>
//                         <h3>recommend</h3>
//                     </section>
//                     {/*추천 */}
//                 </div>
//                 <div class="category">
//                     {/*분류 */}
//                     <section>
//                         <h3>분류</h3>
//                     </section>
//                     {/*분류 */}
//                 </div> 
//             </div>
//         </div>
//         <footer>
//             <div class="container">
//                 <div class="footer">
//                     <h2>푸터</h2>
//                 </div>
//             </div>
//         </footer>
//     </div>
//     </div>
//   );
}

export default App;
