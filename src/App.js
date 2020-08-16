import React from 'react';
import { HashRouter,Route } from "react-router-dom";
import Home from "./routes/Home";
import Mypage from "./routes/Mypage";
import Search from "./routes/Search";

function App(){
    return (
        <HashRouter>
            <Route path="/" exact={true} component={Home} /> 
            <Route path="/Mypage" component={Mypage} />
            <Route path="/search" component={Search} />
        </HashRouter>
        );
}

export default App;