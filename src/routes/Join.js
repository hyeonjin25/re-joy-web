import React, { useState } from "react";
import axios from "axios";
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
  const [gender, setGender] = useState({
    male: true,
    female: false,
  });

  const serverUrl = "localhost:9000/Join_process";

  const onSubmit = (
    async (e) => {
      e.preventDefault();
      // console.log({id, pw, pw_check, name, birth, email, gender});
      await axios
        .post(serverUrl, { id, pw, pw_check, name, birth, email, gender })
        // .then((response) => {
        //   console.log(response);
        // })
        // .catch((error) => {
        //   console.log(error);
        // });
    }
  );

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
  const onChangeGender = (e) => {
    setGender(e.target.value);
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
      </header>
      {/* //헤더 */}
      {/* 컨텐츠 */}
      <main className="join_main">
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
              <div className="male_radio">
                <input
                  type="radio"
                  name="성별"
                  value="male"
                  id="male"
                  checked
                  onChange={onChangeGender}
                />
                <label htmlFor="male">남자</label>
              </div>
              <div className="female_radio">
                <input
                  type="radio"
                  name="성별"
                  value="female"
                  id="female"
                  onChange={onChangeGender}
                />
                <label htmlFor="female">여자</label>
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
              <input type="submit" value="가입하기" />
            </div>
          </form>
        </div>
        {/* //회원가입 입력 */}
      </main>
      {/* 컨텐츠 */}
    </div>
  );
};

export default Join;
