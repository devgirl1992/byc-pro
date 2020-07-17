import React from 'react';
import Logo from "./Components/Logo";
import Navbar from "./Components/Navbar";
import Obj from "./Components/Obj";
import Footer from "./Components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
         <Logo />  
         <Navbar />   
    <Obj />
    <Footer />
    </div>
  );
}

export default App;
