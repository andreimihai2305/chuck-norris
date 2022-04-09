import './App.css';
import React, { Component } from 'react';
import Fact from './components/Fact';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }
  }

  
  componentDidMount() {
    this.getFact();
    
  }
  

  handleButtonClick = () => {
    this.getFact();
  }
  
  getFact = () => {
    fetch("https://api.chucknorris.io/jokes/random").then(res => res.json()).then(data => this.setState({ data: data }));
    
  }
  

  render() {
    let { value } = this.state.data;
    if (!value) value = "Please wait...";
    // console.log(value);
    return (
      <div className="App">
        <header>
          <h1>Chuck Norris Facts</h1>
          <button onClick={this.handleButtonClick}>Get Fact</button>
        </header>
        <div>
          <Fact text={value.toString()}></Fact>
        </div>
      </div>
    );
  }
}

export default App;
