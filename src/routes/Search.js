import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchRes from "../components/SearchRes";

class Search extends React.Component {
  state = {
    query: this.props.history.location.state,
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
        console.log(this.state.query_results);
      })
      .catch((errer) => {
        console.log("errer: ", errer.message);
      });
  };

  componentDidMount() {
    const { location, history } = this.props;
    //검색을 통해 페이지로 들어온게 아닌경우 강제로 홈으로 이동시킴(state가 undefined일 떄)
    if (location.state === undefined) {
      history.push("/");
    }
    this.setState({query: history.location.state})
    this.getSearchRes();
  }

  //검색 버튼 누를 시(onClick)
  onSearch_click = async () => {
    const { location, history } = this.props;
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
              </nav>

              <main>
                {/* 검색결과 */}
                <div className="recommend">
                  <div className="container">
                    <section>
                      <div>
                        <h3 className="ir_su">search results</h3>
                        <div className="movies">
                         {/* 검색결과 배열 불러오기 */}
                          {query_results.map((response) => (
                            <SearchRes
                              key={response.id}
                              id={response.id}
                              title={response.title}
                              date={response.release_date}
                              summary={response.overview}
                              poster={response.poster_path}
                              genres={response.genre_ids}
                              rating={response.vote_average}
                            />
                          ))}
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                {/* //검색결과 */}
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
      </div>
    );
  }
}

export default Search;
