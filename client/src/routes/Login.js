import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../components/reset.css";

const Login = (props) => {
  const [id, setId] = useState("");
  const [idValid, setIdValid] = useState(false);
  const [pw, setPw] = useState("");
  const [pwValid, setPwValid] = useState(false);
  const [err,setErr]=useState("");

  const serverUrl =  "http://localhost:9000/user/login_process";;

  const fetchData = async () => {
    await axios
      .post(serverUrl, { id, pw })
      .then((respond) => {
        console.log(respond);
      })
      .catch((error) => {
        console.log("error :", error.message);
      });
  };

  const onSubmit = (e) => {
    if (idValid === false) setErr("아이디를 입력하세요");
    else if (pwValid === false)
      setErr("비밀번호를 입력하세요");
    else {
      e.preventDefault();
      fetchData();

      //홈으로 이동
      props.history.push("/")
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
    if (e.target.value.length < 1) setPwValid(false);
    else setPwValid(true);
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
      </header>
      {/* //헤더 */}
      {/* 컨텐츠 */}
      <main className="join_main" style={{ marginTop: 50 }}>
        {/* 로그인 입력 */}
        <div className="join_input">
          <h2 style={{ marginBottom: 20 }}>로그인</h2>
          <form onSubmit={onSubmit}>
            <div>
              <input
                style={{ marginBottom: 10, height: 50 }}
                type="text"
                placeholder="아이디"
                value={id}
                onChange={onChangeId}
                maxLength="20"
              />
            </div>
            <div>
              <input
                style={{ marginBottom: 10, height: 50 }}
                type="password"
                placeholder="비밀번호"
                value={pw}
                onChange={onChangePw}
                maxLength="20"
              />
            </div>
            <div>
              <input type="submit" value="로그인" style={{ height: 50 }} />
              <div id="err">{err}</div>
            </div>
          </form>
        </div>
        {/* //로그인 입력 */}
      </main>
      {/* 컨텐츠 */}
      {/* 푸터 */}
      <footer>
        <div id="move_join">
          <ul>
            <Link
              to={{
                pathname: "/Join",
                state: {},
              }}
            >
              <li>회원가입</li>
            </Link>
            <li>아이디찾기</li>
            <li>비밀번호찾기</li>
          </ul>
        </div>
      </footer>
      {/* //푸터 */}
    </div>
  );
};

export default Login;
