import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from "./components/footer/Index"
import Navbar from "./components/navbar/Navbar"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default App;