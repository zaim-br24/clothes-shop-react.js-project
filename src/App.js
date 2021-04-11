import React from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};
const JacketsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Jackets Page</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/shop/hats" component={HatsPage}></Route>
      <Route path="/shop/jackets" component={JacketsPage}></Route>
    </div>
  );
}

export default App;
