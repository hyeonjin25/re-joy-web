import React from "react";
import "./Mypage.css";

function Mypage() {
  return (
    <div id="mypage_wrap">
      <body>
        {/* 즐겨찾기 체크된 영화 표시  */}
        <p>
          <h1>나의 즐겨찾기 콘텐츠</h1>
          <div class="container">
            <button> </button>
            <div class="starlist">image</div>
            <button> </button>
          </div>
        </p>

        <p>
          <h1>설정</h1>
          <div class="setting">
            <p>
              <a href="">계정관리</a>
            </p>
            <p>
              <a href="">환경설정</a>
            </p>
          </div>
        </p>
      </body>
    </div>
  );
}

export default Mypage;
