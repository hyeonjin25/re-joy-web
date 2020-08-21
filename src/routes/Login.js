import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/reset.css";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setpw] = useState("");

  const onSubmit = (e) => {
    console.log({
      id,
      pw,
    });
  };
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setpw(e.target.value);
  };

  return (
    <div className="login_wrap">
      {/* 헤더 */}
      <header className="join_header">
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: "/",
          }}
        >
          <h1>re-joy</h1>
        </Link>
        {/* 헤더메뉴 */}
        <div className="join_header_top">
          <div className="join_container">
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
      </header>
      {/* //헤더 */}
      {/* 컨텐츠 */}
      <div className="join_content">
        {/* 로그인 입력 */}
        <div className="join_input">
          <h2>로그인</h2>
          <form onSubmit={onSubmit}>
            <div>
              <input
                type="text"
                placeholder="아이디"
                value={id}
                onChange={onChangeId}
                maxLength="20"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="비밀번호"
                value={pw}
                onChange={onChangePw}
                maxLength="20"
              />
            </div>
            <div>
              <input type="submit" value="로그인" />
            </div>
          </form>
        </div>
        {/* //로그인 입력 */}
      </div>
      {/* 컨텐츠 */}
    </div>
  );
};

export default Login;
