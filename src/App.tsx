import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppRouter } from "./route/route";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <AppRouter />
      </Router>
    </RecoilRoot>
  );
}

export default App;
