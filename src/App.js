import React from "react";
import { Home } from "./Home";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import "../src/stylesheets/styles.scss";

function App(props) {
  return (
    <div className="layout">
      <Header />
      <div className="layout__wrapper">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
