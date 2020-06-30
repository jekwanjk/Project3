import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// import navbar
import SignUp from "./pages/SignUp.js";
import Recipes from "./pages/Recipes.js";
import Shopping from "./pages/Shopping.js";

function App() {
  return (
    <Router>
      <div>
        {/* ADD NAVBAR */}
        <Route exact path="/" component={SignUp} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/shopping" component={Shopping} />
      </div>
    </Router>
  );
}
export default App;
