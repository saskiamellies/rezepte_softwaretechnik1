import React, { Component } from "react";
import Header from "./components/Header";
import SearchDish from "./components/SearchDish";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Header  />
      <SearchDish />
    </div>
  );
  return(
    <NavBar />
  )
}

export default App;