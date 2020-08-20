import React from "react";
import { Link } from "react-router-dom";
import "../components/reset.css";
import "./Join.css";

class Join extends React.Component {
  render() {
    this.state = {
      userID: "",
      userPW: "",
      userPW_check: "",
      userName: "",
      userBirthday: "",
      userEmail: "",
      userJender: {
        female: true,
        male: false,
      },
    };
    const onChangeID = (e) => {
      this.setState({
        userID: e.target.value,
      });
    };
    const onChangePW = (e) => {
      this.setState({
        userPW: e.target.value,
      });
    };
    const onChangePW_check = (e) => {
      this.setState({
        userPW_check: e.target.value,
      });
    };
    const onChangeName = (e) => {
      this.setState({
        userName: e.target.value,
      });
    };
    const onChangeBirthday = (e) => {
      this.setState({
        userBirthday: e.target.value,
      });
    };
    const onChangeEmail = (e) => {
      this.setState({
        userEmail: e.target.value,
      });
    };
    const onChangeJender = (e) => {
      let obj = {};
      obj[e.target.value] = e.target.checked;
      this.setState({
        userJender: obj,
      });
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
            <form>
              <div>
                <input
                  type="text"
                  placeholder="아이디"
                  value={this.state.userID}
                  onChange={this.onChangeID}
                  maxLength="20"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="비밀번호"
                  value={this.state.userPW}
                  onChange={this.onChangePW}
                  maxLength="20"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="비밀번호 확인"
                  value={this.state.userPW_check}
                  onChange={this.onChangePW_check}
                  maxLength="20"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="이름"
                  value={this.state.userName}
                  onChange={this.onChangeName}
                  maxLength="20"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="생년월일(yyyymmdd)"
                  value={this.state.userBirthday}
                  onChange={this.onChangeBirthday}
                  maxLength="20"
                />
              </div>
              <div>
                <div className="female_radio">
                  <input
                    type="radio"
                    className="jender_input"
                    name="성별"
                    value="female"
                    id="female"
                    // checked={this.state.userJender["female"]}
                    // onChange={this.onChangeJender}
                  />
                  <label for="female">여자</label>
                </div>
                <div className="male_radio">
                  <input
                    type="radio"
                    className="jender_input"
                    name="성별"
                    value="male"
                    id="male"
                    // checked={this.state.userJender["male"]}
                    // onChange={this.onChangeJender}
                  />
                  <label for="male">남자</label>
                </div>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="이메일"
                  value={this.state.userEmail}
                  onChange={this.onChangeEmail}
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
  }
}

export default Join;
