import React from "react";
import './App.css';
import Header from "./components/Header/Header"; 
import TeslaBattery from "./components/Container/TeslaBattery";
import {counterDefaultVal} from "./constants/defaultValues";

function App() {
  
  return (
    <div className="App">
      <Header />
      <TeslaBattery defaultValues={counterDefaultVal} />
    </div>
  );
}

export default App;
