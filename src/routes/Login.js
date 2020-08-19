import React from 'react';

class Login extends React.Component {
    render(){
        // state = {
        //     userID:"",
        //     userPW:""
        // };
        return(
            <div className="login_wrap">
                {/* 헤더 */}
                <header className="_header" style="margin-bottom:30px">    
                    <h1>re-joy</h1>
                </header>
                {/* //헤더 */}
                {/* 컨텐츠 */}
                <div className="join_content">
                    {/* 로그인 입력 */}
                    <div className="join_input">
                        <div><input type="text" className="id_input" placeholder="아이디" maxLength="20"/></div>
                        <div><input type="password" className="pw_input" placeholder="비밀번호" maxLength="20"/></div>
                        <div><input type="submit" className="join_button" value="로그인"/></div>
                    </div>
                    {/* //로그인 입력 */}
                </div>
                {/* 컨텐츠 */}
            </div>
        );
    }
}

export default Login;