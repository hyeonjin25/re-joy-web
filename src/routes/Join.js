import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/reset.css";
import "./Join.css";

const Join = () => {
  const [id, setId] = useState("");
  const [pw, setpw] = useState("");
  const [pw_check, setPw_check] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [jender, setJender] = useState({ female: true, male: false });

  const onSubmit = (e) => {
    console.log({
      id,
      pw,
      pw_check,
      name,
      birth,
      email,
      jender,
    });
  };
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setpw(e.target.value);
  };
  const onChangePw_check = (e) => {
    setPw_check(e.target.value);
  };
  const onChangeName = (e) => {
      setName(e.target.value);
  };
  const onChangeBirth = (e) => {
      setBirth(e.target.value);
  };
  const onChangeEmail = (e) => {
      setEmail(e.target.value);
  };
  const onChangeJender = (e) => {
    let obj = {};
    obj[e.target.value] = e.target.checked;
    setJender(obj);
  };
  return (
    <div className="join_wrap">
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
        {/* 회원가입 입력 */}
        <div className="join_input">
          <h2>회원가입</h2>
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
              <input
                type="password"
                placeholder="비밀번호 확인"
                value={pw_check}
                onChange={onChangePw_check}
                maxLength="20"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="이름"
                className="input_name"
                value={name}
                onChange={onChangeName}
                maxLength="20"
              />
            </div>
            <div>
              <div className="female_radio">
                <input
                  type="radio"
                  name="성별"
                  value="female"
                  id="female"
                  // checked={jender["female"]}
                  // onChange={onChangeJender}
                />
                <label htmlFor="female">여자</label>
              </div>
              <div className="male_radio">
                <input
                  type="radio"
                  name="성별"
                  value="male"
                  id="male"
                  // checked={jender["male"]}
                  // onChange={onChangeJender}
                />
                <label htmlFor="male">남자</label>
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="생년월일(yyyymmdd)"
                value={birth}
                onChange={onChangeBirth}
                maxLength="20"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={onChangeEmail}
                maxLength="20"
              />
            </div>
            <div>
              <input type="submit" className="join_button" value="가입하기" />
            </div>
          </form>
        </div>
        {/* //회원가입 입력 */}
      </div>
      {/* 컨텐츠 */}
    </div>
  );
};

export default Join;
