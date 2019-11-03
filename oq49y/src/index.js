import React from "react";
import ReactDOM from "react-dom";

import Header from "./header";
import MainContent from "./mainContent";
import Footer from "./footer";
import Menu from "./menu";

import "./styles.css";
import "./menu-styling.css";

function App() {
  return (
    <div>
      <Menu />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
