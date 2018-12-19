import React, { Component } from 'react';
import { getTeamConfidenceFromFile, getTeamConfidenceFromStr } from './utils/csvParser'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      csvString: ''
    };
  }
  handleSubmit = () => {
    getTeamConfidenceFromStr(this.state.csvString).then(console.log)
    alert('logged')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Geekbot Parser
        </header>
        <div>
          <h2>ENTER TEXT HERE</h2>
          <input type="file" accept=".csv" ID="fileSelect" onChange={f => this.setState({ file: f })} />
          <textarea onChange={(e) => this.setState({ csvString: e.target.value })}></textarea>
          <button onClick={this.handleSubmit}>Get my graph</button>
        </div>
      </div>
    );
  }
}

export default App;
