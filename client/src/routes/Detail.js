import React from "react";
import { Link } from "react-router-dom";
import "./Detail.css";
import "../components/Movie.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    //컨텐츠 클릭을 통해 페이지로 들어온게 아닌경우 강제로 홈으로 이동시킴(state가 undefined일 떄)
    if (location.state === undefined) {
      history.push("/");
    }
    document.body.style.backgroundColor = "black";
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = "#535962";
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div id="de_wrap">
          {/* 헤더 */}
          <header id="de_header">
            <div className="header">
              {/* 헤더메뉴 */}
              <div className="header_top">
                <div className="container">
                  {/* 웹 이름 */}
                  <Link
                    style={{ textDecoration: "none" }}
                    to={{
                      pathname: "/",
                    }}
                  >
                    <h1>re-joy</h1>
                  </Link>
                  {/* //웹 이름 */}
                  <ul className="link">
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
            </div>
          </header>
          {/* //헤더 */}
          <main id="de_main">
            <div id="back_glass_l" className="glass"></div>
            <div id="back_glass_r" className="glass"></div>
            <div
              id="back"
              style={{
                width: 1000,
                height: 500,
                backgroundImage:
                  "url(https://image.tmdb.org/t/p/w500" +
                  location.state.backdrop +
                  ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "900px 500px",
                backgroundPositionX: 50,
                zIndex: 1,
              }}
            ></div>
            <div id="de_movie">
              <div className="detail movie">
                <img
                  className="poster"
                  src={
                    "https://image.tmdb.org/t/p/w500" + location.state.poster
                  }
                  alt={location.state.title}
                  title={location.state.title}
                />
                <div className="movie_data_wrap">
                  <div className="movie_data">
                    <h3 className="movie_title">{location.state.title}</h3>
                    <div className="de_movie_rating">
                      <img
                        className="star_icon"
                        src={require("../img/star_icon.png")}
                        alt="rating"
                      />
                      <h5 className="rating_text">
                        평점:&emsp;{location.state.rating}
                      </h5>
                    </div>
                    <h5 className="movie_year">
                      개봉일:&emsp;{location.state.date}
                    </h5>
                    <p className="movie_summary">{location.state.summary}</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer>
            <div className="de_footer">
              <div className="container">
                <h2 className="ir_su">푸터</h2>
                <span>re-joy</span>
                <div>https://github.com/hyeonjin25/re-joy-web</div>
              </div>
            </div>
          </footer>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
