import React, { Component } from 'react';
import './App.css';

import MaterialUiForm from './components/MaterialUIForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MaterialUiForm/>
        </header>
      </div>
      
    );
  }
}

export default App;
