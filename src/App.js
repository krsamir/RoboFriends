import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    }
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
    return (
      <div className="tc">
        <h1>Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        {/* <CardList robots={robots} /> */}
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
export default App;
