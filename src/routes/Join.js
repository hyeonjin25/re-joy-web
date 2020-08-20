import React from "react";
import { Link } from "react-router-dom";
import './Join.css';

class Join extends React.Component {
    render(){
        // state = {
        //     userID:"",
        //     userName:"",
        //     userBirthday:"",
        //     userEmail:"",
        //     userAdress:""
        // };
        return(
            <div className="join_wrap">
                {/* 헤더 */}
                <header className="join_header">    
                    <h1>re-joy</h1>
                    {/* 헤더메뉴 */}
                    <div className="join_header_top">
                                <div className="join_container">
                                    <ul>
                                        <Link to={{
                                            pathname: "/Login",
                                            state: {

                                            }
                                        }}><li className="login">로그인</li>
                                        </Link>
                                        <Link to={{
                                            pathname: "/Join",
                                            state: {

                                            }
                                        }}><li className="join">회원가입</li>
                                        </Link>
                                        <Link to={{
                                            pathname: "/Mypage",
                                            state: {

                                            }
                                        }}><li className="mypage">마이페이지</li>
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
                        <div><input type="text" className="id_input" placeholder="아이디" maxLength="20"/></div>
                        <div><input type="password" className="pw_input" placeholder="비밀번호" maxLength="20"/></div>
                        <div><input type="password" className="pw_input_check" placeholder="비밀번호 확인" maxLength="20"/></div>
                        <div><input type="text" className="bd_input" placeholder="생년월일(yyyymmdd)" maxLength="20"/></div>
                        <div><input type="email" className="email_input" placeholder="이메일" maxLength="20"/></div>
                        <div><input type="text" className="adress_input" placeholder="주소" maxLength="20"/></div>
                        <div><input type="submit" className="join_button" value="가입하기"/></div>
                    </div>
                    {/* //회원가입 입력 */}
                </div>
                {/* 컨텐츠 */}
            </div>
        );
    }
}

export default Join;