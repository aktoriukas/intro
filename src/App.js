import React from 'react';
import './App.css';
import Left from './elements/Left';
import Center from './elements/Center';
import Right from './elements/Right';
import Database from './Database';

function App() {
  return (
    <div className="App">
      <Left Database={Database}/>
      <Center Database={Database}/>
      <Right Database={Database}/>
    </div>
  );
}

export default App;
