import React from 'react';
import './App.scss';
import { Button } from './components';

function App() {
  return (
    <div className="App">
      <h1>Componentes</h1>
      <div className="buttons">
        <Button>Button</Button>
        <Button className="bordered">Button</Button>
        <Button className="btn-circle">Button</Button>
      </div>
    </div>
  );
}

export default App;
