import React from 'react';
import { Link, HashRouter,Route } from "react-router-dom";
import Mypage from "./routes/Mypage"
import Home from "./routes/Home"

function App(){
    return (
        <HashRouter>
            <header>
                <Link to="Mypage">
                    <button>Mypage</button>
                </Link>
            </header>
            <main>
                <Route path="/" exact={true} component={Home} /> {/*exact={true}쓰면 /뒤에 무언가 올때는 route하지 않음*/}
                <Route path="/Mypage" component={Mypage} />
            </main>
        </HashRouter>
        );
}

export default App;