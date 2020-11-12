import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Join from "./routes/Join";
import Mypage from "./routes/Mypage";
import Login from "./routes/Login";
import Search from "./routes/Search";
import Detail from "./routes/Detail";
import Nav from "./components/view/Navbar";
import Footer from "./components/view/Footer";

function App() {
  return (
    <HashRouter>
      <Nav />
      <div style={{ minHeight: "calc(100vh - 130px)" }}>
        <Route exact path='/' component={Home} />
        <Route exact path='/Mypage' component={Mypage} />
        <Route exact path='/Join' component={Join} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Search/:query' component={Search} />
        <Route exact path='/Detail/:title' component={Detail} />
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
