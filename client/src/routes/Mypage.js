import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import "./Mypage.css";

function Mypage() {
  const [login_id, setLogin_id] = useState("");
  const [is_logined, setIs_logined] = useState(false);

  useEffect(() => {
    //로그인이 되어있는지 확인하기
    if (Cookies.get("login_id")) {
      //로그인 되어있을 경우
      setIs_logined(true);
      setLogin_id(Cookies.get("login_id"));
    }
  }, []);

  return (
    <div id="mypage_wrap">
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
              {/* <ul className="link">
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
                  </ul> */}
            </div>
          </div>
          {/* //헤더메뉴 */}
        </div>
      </header>
      {/* //헤더 */}
      <main>
        {/* 즐겨찾기 체크된 영화 표시  */}
        <div>
          <div className="container">
            <h3 className="ir_su">즐겨찾기 콘텐츠</h3>
                <div className="starlist">{login_id}님의 즐겨찾기 콘텐츠</div>
          </div>
        </div>

        {/* <div>
          <h1>설정</h1>
          <div className="setting">
            <div>
              <a href="">계정관리</a>
            </div>
            <div>
              <a href="">환경설정</a>
            </div>
          </div>
        </div> */}
      </main>
      <footer>
        <div className="footer">
          <div className="container">
            <h2 className="ir_su">푸터</h2>
            <span>re-joy</span>
            <div>https://github.com/hyeonjin25/re-joy-web</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Mypage;
