import React from 'react';
import logo from './intelli-logo.png';

import EmailGenerator from './Components/EmailGenerator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <h1>Email Signature Generator</h1>       
      </header>
      <EmailGenerator></EmailGenerator>     
     
    </div>
  );
}

export default App;
