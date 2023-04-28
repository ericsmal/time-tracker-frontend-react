import './App.css';
import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header text={ `Hello ${process.env.REACT_APP_HELLO_NAME}!` } />
    </div>
  );
}

export default App;
