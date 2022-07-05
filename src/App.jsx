import './App.css';
import React, { Component } from 'react';
import Fact from './components/Fact';
import Dropdown from './components/Dropdown';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      currentCategory: "all",
      categories: ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]
    }
  }

  
  componentDidMount() {
    this.getFact();
    
  }
  

  handleButtonClick = () => {
    this.getFact(this.state.currentCategory);
  }

  handleCategorySelect = (event) => {
    this.setState({ currentCategory: event.target.value });
    

  }
  
  getFact = (category="all") => {
    if (category !== "all") fetch(`https://api.chucknorris.io/jokes/random?category=${category}`).then(res => res.json()).then(data => this.setState({ data: data }));
    
    else fetch("https://api.chucknorris.io/jokes/random").then(res => res.json()).then(data => this.setState({ data: data }));
  }
  
  

  render() {
    let { value } = this.state.data;
    const { categories } = this.state;
    if (!value) value = "Please wait...";
    return (
      <div className="App">
        <header>
          <h1>Chuck Norris Facts</h1>
          <div>
            <Dropdown onSelect={this.handleCategorySelect} categories={categories}/>
            <button onClick={this.handleButtonClick}>Get Fact</button>
          </div>
        </header>
        <main>
          <Fact text={value} />
        </main>
      </div>
    );
  }
}

export default App;
