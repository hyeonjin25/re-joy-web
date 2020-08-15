import React from 'react';
import { Link, HashRouter,Route } from "react-router-dom";
import Mypage from "./routes/Mypage"
import Home from "./routes/Home"

function App(){
    return (
        <HashRouter>
            <Route path="/" exact={true} component={Home} /> 
            <Route path="/Mypage" component={Mypage} />
        </HashRouter>
        );
}

export default App;