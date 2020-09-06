import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../components/reset.css";
import "./Join.css";

const Join = (props) => {
  const [id, setId] = useState("");
  const [idValid, setIdValid] = useState(false);
  const [pw, setPw] = useState("");
  const [pwValid, setPwValid] = useState(false);
  const [pw_check, setPw_check] = useState("");
  const [pw_checkValid, setPw_checkValid] = useState(false);
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [birth, setBirth] = useState("");
  const [birthValid, setBirthValid] = useState(false);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [gender, setGender] = useState("M");
  const [err, setErr] = useState("");

  const serverUrl = "http://localhost:9000/user/Join_process";

  //입력사항 전부 입력됐을 때만 서버로 전송
  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log({id, pw, pw_check, name, birth, email, gender});
    if (idValid === false) setErr("아이디를 입력하세요");
    else if (pwValid === false)
      setErr("비밀번호가 맞게 입력되었는지 확인해주세요");
    else if (pw_checkValid === false)
      setErr("비밀번호확인이 일치하지 않습니다.");
    else if (nameValid === false) setErr("이름을 입력하세요");
    else if (birthValid === false)
      setErr("생년월일이 맞게 입력되었는지 확인해주세요");
    else if (emailValid === false)
      setErr("이메일이 맞게 입력되었는지 확인해주세요");
    else {
      await axios
        .post(serverUrl, { id, pw, pw_check, name, birth, email, gender })
        .then((response) => {
          console.log(response.data.id);
          //setId(response.id)
        })
        .catch((error) => {
          console.log(error);
        });

      //홈으로 이동
      props.history.push({
        pathname: "/",
        state: {},
      });
    }
  };

  const onChangeId = (e) => {
    setId(e.target.value);
    if (e.target.value.length < 1) setIdValid(false);
    else {
      setIdValid(true);
    }
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
    //정규식(8~16자리 문자와 숫자 무조건 포함)
    var ch = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
    if (ch.test(e.target.value)) setPwValid(true);
    else setPwValid(false);
  };
  const onChangePw_check = (e) => {
    setPw_check(e.target.value);
    //pw와 같을 시 통과
    if (e.target.value !== pw) setPw_checkValid(false);
    else setPw_checkValid(true);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
    //2자 이상일시 통과
    if (e.target.value.length < 2) setNameValid(false);
    else setNameValid(true);
  };
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
    //정규식(yyyymmdd 무조건 8자리, 숫자만 입력가능)
    var br = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
    if (br.test(e.target.value)) setBirthValid(true);
    else setBirthValid(false);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    //정규식 (이메일 형식대로 해야 통과)
    var em = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (em.test(e.target.value)) setEmailValid(true);
    else setEmailValid(false);
  };
  const onChangeGender = (e) => {
    if (e.target.value === "female") setGender("W");
    else setGender("M");
    console.log(gender);
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
                name="id"
                onChange={onChangeId}
                maxLength="20"
                style={{
                  borderColor:
                    idValid === true ? "green" : id !== "" ? "red" : "",
                }}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="비밀번호(8~16자리, 숫자 및 영문 반드시 포함)"
                value={pw}
                name="pw"
                onChange={onChangePw}
                maxLength="20"
                style={{
                  borderColor:
                    pwValid === true ? "green" : pw !== "" ? "red" : "",
                }}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="비밀번호 확인"
                value={pw_check}
                name="pw_check"
                onChange={onChangePw_check}
                maxLength="20"
                style={{
                  borderColor:
                    pw_checkValid === true
                      ? "green"
                      : pw_check !== ""
                      ? "red"
                      : "",
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="이름"
                className="input_name"
                value={name}
                name="name"
                onChange={onChangeName}
                maxLength="10"
                style={{
                  borderColor:
                    nameValid === true ? "green" : name !== "" ? "red" : "",
                }}
              />
            </div>
            <div>
              <div className="male_radio">
                <input
                  type="radio"
                  name="gender"
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
                  name="gender"
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
                name="birth"
                onChange={onChangeBirth}
                maxLength="8"
                style={{
                  borderColor:
                    birthValid === true ? "green" : birth !== "" ? "red" : "",
                }}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="이메일"
                value={email}
                name="email"
                onChange={onChangeEmail}
                maxLength="30"
                style={{
                  borderColor:
                    emailValid === true ? "green" : email !== "" ? "red" : "",
                }}
              />
            </div>
            <div>
              <input type="submit" value="가입하기" />
              <div id="err">{err}</div>
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
