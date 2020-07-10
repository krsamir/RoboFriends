import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './App.css';
import Scroll from './Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response =>
    response.json())
  .then(users => {
    this.setState({robots:users})
  }) 
}
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    //to change/update state
    //done in place of this.state.searchfield
  };
  //   about error:
  //   the value of this is now refering to the app because the event happened in the input
  //   the value of this is well the input and input does not have states.robot.
  //   to overcome error use arrow functions.
  render() {
    const filteredRobots = this.state.robots.filter(robots => { 
      return (robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
    });
    if(this.state.robots.length === 0){ 
      return<h1>Loading...</h1>

    }
    else{
      return (
      <div className="tc">
        <h1 className = 'f1'>Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        {/* <CardList robots={robots} /> */}
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
        
      </div>
    );
    }
    
  }
}
export default App;
