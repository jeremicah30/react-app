import "./App.css";
import React from "react";
import { MainContent, NavBar } from "./components";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <MainContent />
    </div>
  );
};

export default App;
