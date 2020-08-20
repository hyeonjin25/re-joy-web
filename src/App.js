import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Mypage from "./routes/Mypage";
import Join from "./routes/Join";
import Login from "./routes/Login";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/Mypage" component={Mypage} />
      <Route path="/Login" component={Login} />
      <Route path="/Join" component={Join} />
    </HashRouter>
  );
}

export default App;
