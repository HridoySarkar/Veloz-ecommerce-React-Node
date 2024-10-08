import React from 'react';
import { Outlet } from 'react-router';
import './App.css';

const App = () => {
  return (
    <div>
      <Outlet/>
    </div>
  );
};

export default App;