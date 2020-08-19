import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Mypage from "./routes/Mypage";
import Search from "./routes/Search";
import Login from "./routes/Login";

function App(){
    return (
        <HashRouter>
            <Route path="/" exact={true} component={Home} /> 
            <Route path="/Mypage" component={Mypage} />
            <Route path="/Search" component={Search} />
            <Route path="/Login" component={Login} />
        </HashRouter>
        );
}

export default App;