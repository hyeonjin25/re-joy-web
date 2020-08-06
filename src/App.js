import React, { Component } from 'react';
import './reset.css';
import './App.css';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <div id="wrap">
        <header>
            <h1><a href="#">Movie Web</a></h1>
            <div class="linker">
                <ul>
                    <li><a href="https://www.netflix.com/browse" target="_blank">넷플릭스</a></li>
                    <li><a href="https://play.watcha.net/" target="_blank">왓챠</a></li>
                    <li><a href="https://www.wavve.com/" target="_blank">웨이브</a></li>
                </ul>
            </div>
        </header>
        <nav>
            <div class="container">
                <div class="search">
                    {/*검색*/} 
                    <h2>search</h2>
                    {/*검색*/}
                </div>
                <div class="menu">
                    {/*메뉴 */}
                    <h2>menu</h2>
                    {/*메뉴*/}
                </div>
            </div>
        </nav>
        <div id="content">
            <div class="container">
                <div class="recommend">
                    {/*추천 */}
                    <section>
                        <h3>recommend</h3>
                    </section>
                    {/*추천 */}
                </div>
                <div class="category">
                    {/*분류 */}
                    <section>
                        <h3>분류</h3>
                    </section>
                    {/*분류 */}
                </div> 
            </div>
        </div>
        <footer>
            <div class="container">
                <div class="footer">
                    <h2>푸터</h2>
                </div>
            </div>
        </footer>
    </div>
    </div>
  );
}

export default App;
