import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Home from './components/Home';
import ParticlesBackground from './components/ParticlesBackground';
import './index.css'
// import backgroundImage from "./images/bgImage.jpg";

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <Header />
      <Home />
      {/* <div className="background-image"></div> */}
    </div>
  );
}

export default App;
