import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Join from "./routes/Join";
import Mypage from "./routes/Mypage";
import Login from "./routes/Login";
import Search from "./routes/Search";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/Mypage" component={Mypage} />
      <Route path="/Join" component={Join} />
      <Route path="/Login" component={Login} />
      <Route path="/Search" component={Search} />
    </HashRouter>
  );
}

export default App;
