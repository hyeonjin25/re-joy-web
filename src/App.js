import React from 'react';
import { HashRouter,Route } from "react-router-dom";
import About from "./routes/About"
import Home from "./routes/Home"

function App(){
    return <HashRouter>
        <Route path="/" exact={true} component={Home} /> {/*exact={true}쓰면 /뒤에 무언가 올때는 route하지 않음*/}
        <Route path="/about" component={About} />
    </HashRouter>
}
export default App;