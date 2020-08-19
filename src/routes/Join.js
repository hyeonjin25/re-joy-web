import React from "react";

class Join extends React.Component {
    render(){
        return(
            <div className="wrap">
                <header>    
                    <h1>회원가입</h1>
                </header>
                <div id="content">
                    {/* 회원가입 입력 */}
                    <div className="login_input">
                        <input type="text" className="id_input" placeholder="아이디" maxLength="20"></input>
                        <input type="text" className="pw_input" placeholder="비밀번호" maxLength="20"></input>
                        <input type="submit" className="login_button"></input>
                    {/* //회원가입 입력 */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Join;