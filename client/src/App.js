import React from 'react';
import DataDisplayContainer from './DataDisplayContainer';
import './App.css';
import DarkModeButton from './DarkModeButton';

function App() {
  return (
    <div className="App">
      <DarkModeButton />
      <DataDisplayContainer />
    </div>
  );
}

export default App;
