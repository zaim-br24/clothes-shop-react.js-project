import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/shop" component={ShopPage}></Route>
    </div>
  );
}

export default App;
