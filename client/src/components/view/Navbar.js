import React from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

//로그인 여부에 따라 네비게이션 변경
function Navbar() {
  //로그인시 로그아웃, 마이페이지 버튼 나오도록
  if (this.state.is_logined === true) {
    return (
      <div className='header_log'>
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
      </div>
    );
  }
  //로그인 안했을 시 로그인, 회원가입 버튼 나오도록
  else {
    return (
      <div className='header_log'>
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
      </div>
    );
  }
}

export default Navbar;
