import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./Detail.css";
import "../components/Movie.css";
import { element } from "prop-types";

class Detail extends React.Component {
  state = {
    //adult: "",
    fav_process: false,
  };

  componentDidMount() {
    const { location, history } = this.props;

    //컨텐츠 클릭을 통해 페이지로 들어온게 아닌경우 강제로 홈으로 이동시킴(state가 undefined일 떄)
    if (location.state === undefined) {
      history.push("/");
    }

    //페이지가 이동되어 올 떄 스크롤 맨 위로 올리기
    window.scrollTo(0, 0);

    // document.body.style.backgroundColor = "black";

    //   //청소년 관람불가인지 확인
    //   if (location.state.adult === true)
    //     this.setState({ adult: "청소년 관람 불가" });
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = "#535962";
  }

  fav_func = () => {
    //로그인 돼있으면
    if (Cookies.get("login_id")) {
      if (this.state.fav_process === false) {
        this.setState({ fav_process: true });
      } else this.setState({ fav_process: false });
      //바뀐 fav상태 전달
      this.fetchData();
    }
    //로그인 안돼있을 경우 경고
    else {
      window.alert("로그인이 필요한 기능입니다!");
    }
  };

  //서버에 favorite정보 전달하기 위해 연결
  fetchData = async () => {
    const { location } = this.props;
    var serverUrl = "http://localhost:9000/client/like_process ";
    await axios
      .post(serverUrl, [
        Cookies.get("login_id"),
        location.state.title,
        this.state.fav_process,
      ])
      .then((respond) => {
        console.log("즐겨찾기 완료!");
      })
      .catch((error) => {
        console.log("error :", error.message);
        this.setState({ fav_process: false });
      });
  };

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div id='de_wrap'>
          <main id='de_main'>
            <div id='back_glass_l' className='glass'></div>
            <div
              id='back'
              style={{
                width: '1000px',
                height: '500px',
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
            <div id='de_movie'>
              <div className='detail movie'>
                <button
                  type='button'
                  onClick={this.fav_func}
                  id='favorite'
                  value='favorite'
                  name='favorite'
                  style={{
                    zIndex: "3",
                    //버튼이 클릭됐을 때 구분할 수 있게 색 바꾸기
                    backgroundColor:
                      this.state.fav_process === true ? "#faf0af" : "",
                    color: this.state.fav_process === true ? "black" : "",
                  }}
                >
                  <img
                    className='star_icon'
                    src={require("../img/star_icon.png")}
                    alt='rating'
                  />
                </button>
                <img
                  className='poster'
                  src={
                    "https://image.tmdb.org/t/p/w500" + location.state.poster
                  }
                  alt={location.state.title}
                  title={location.state.title}
                />
                <div className='movie_data_wrap'>
                  <div className='movie_data'>
                    <h3 className='movie_title'>{location.state.title}</h3>
                    {/* <div>{this.state.adult}</div> */}
                    <div className='de_movie_rating'>
                      <img
                        className='star_icon'
                        src={require("../img/star_icon.png")}
                        alt='rating'
                      />
                      <h5 className='rating_text'>
                        평점:&emsp;{location.state.rating}
                      </h5>
                    </div>
                    <h5 className='movie_year'>
                      개봉일:&emsp;{location.state.date}
                    </h5>
                    <p className='movie_summary'>{location.state.summary}</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
