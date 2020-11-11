import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchRes from "../components/SearchRes";
import "../components/reset.css";
import "./Home.css";

class Search extends React.Component {
  state = {
    query: this.props.match.params.query,
    query_results: [],
    isLoding: true,
  };

  getSearchRes = async () => {
    const serchUrl =
      "https://api.themoviedb.org/3/search/multi?api_key=9aa38313510a50c3ae30091b52efcc90&language=ko&query=" +
      this.state.query +
      "&page=1&include_adult=false";

    await axios
      .get(serchUrl)
      .then((response) => {
        this.setState({
          query_results: response.data.results,
          isLoding: false,
        });
      })
      .catch((errer) => {
        console.log("errer: ", errer.message);
      });
  };

  componentDidMount() {
    const { location, history, match } = this.props;
    //검색을 통해 페이지로 들어온게 아닌경우 강제로 홈으로 이동시킴(state가 undefined일 떄)
    if (location.state === undefined) {
      history.push("/");
    }
    this.setState({ query: match.params.query });
    this.getSearchRes();
  }

  //검색 버튼 누를 시(onClick)
  onSearch_click = async () => {
    const { history } = this.props;
    history.push({
      pathname: "/Search/" + this.state.query,
      state: this.state.query,
    });
  };

  //검색창에 데이터 입력시(onChange)
  onSearch = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { query, query_results, isLoding } = this.state;
    return (
      <div>
        {isLoding ? (
          <div className='loder'>
            {/* 로딩창 */}
            <span className='loder_text'>Lodding...</span>
            {/* //로딩창 */}
          </div>
        ) : (
          <div className='Home'>
            <div id='wrap'>
              <nav style={{ height: 30 }}>
                {/* 검색 */}
                {/* <fieldset id="search">
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
                    </fieldset> */}
                {/* //검색 */}
                <div className='container'>
                  <span>"{this.state.query}"에 대한 검색결과...</span>
                </div>
              </nav>

              <main>
                {/* 검색결과 */}
                <div className='recommend'>
                  <div className='container'>
                    <section>
                      <div style={{ padding: 37, paddingTop: 10 }}>
                        <h3 className='ir_su'>search results</h3>
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {/* 검색결과 배열 불러오기 */}
                          {query_results.map((response) => (
                            <SearchRes
                              key={response.id}
                              id={response.id}
                              media_type={response.media_type}
                              title={
                                response.title === undefined
                                  ? response.name
                                  : response.title
                              }
                              date={response.release_date}
                              summary={response.overview}
                              poster={response.poster_path}
                              backdrop={response.backdrop_path}
                              genres={response.genre_ids}
                              rating={response.vote_average}
                              adult={response.adult}
                            />
                          ))}
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                {/* //검색결과 */}
              </main>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Search;
