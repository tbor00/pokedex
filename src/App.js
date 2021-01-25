import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/home.js";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
