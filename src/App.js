import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.first_name.toLowerCase().includes(this.state.searchfield.toLowerCase);
    });
  }
  //   about error:
  //   the value of this is now refering to the app because the event happened in the input
  //   the value of this is well the input and input does not have states.robot.
  //   to overcome error use arrow functions.
  render() {
    return (
      <div className="tc">
        <h1>Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        {/* <CardList robots={robots} /> */}
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}
export default App;
