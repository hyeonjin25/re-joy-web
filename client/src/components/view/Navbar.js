import React from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";

//로그인 여부에 따라 네비게이션 변경
function Navbar() {
  //로그인시 로그아웃, 마이페이지 버튼 나오도록
  if (Cookies.get("login_id")) {
    return (
      <div className={style.nav}>
        <div className={style.container}>
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
          <ul>
            <Link
              to={{
                pathname: "/",
                state: {},
              }}
            >
              <li className='logout' onClick={this.logout}>
                로그아웃
              </li>
            </Link>
            <Link
              to={{
                pathname: "/Mypage",
                state: {},
              }}
            >
              <li className='mypage'>마이페이지</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
  //로그인 안했을 시 로그인, 회원가입 버튼 나오도록
  else {
    return (
      <div className={style.nav}>
        <div className={style.container}>
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
          <ul>
            <Link
              to={{
                pathname: "/Login",
              }}
            >
              <li className='login'>로그인</li>
            </Link>
            <Link
              to={{
                pathname: "/Join",
                state: {},
              }}
            >
              <li className='join'>회원가입</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
