import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import "./App.css";
import Detail from "./routes/Detail";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;

//exact은 / 만 허용하겠다는 소리 exact 없으면 / something도 허용됨 
//Navigation 안의 있는 Link는 반드시 Router안에 있어야함 

//BrowserRouter를 사용해도 되지만 github page에 upload할 때, 애로사항이 많아서 HashRouter를 사용함
//Route의 원리
// function App(){
//   return <HashRouter>
//     <Route path="/home">
//       <h1>Home</h1>
//     </Route>
//     <Route path="/home/introduction">
//       <h1>Introduction</h1>
//     </Route>
//     <Route path="/about">
//       <h1>About</h1>
//     </Route>
//   </HashRouter>;
// }


//path를 선택하면 그 해당 화면을 보여주는 알고리즘 
//꼭 path와 화면의 이름이 같을 필요는 없음