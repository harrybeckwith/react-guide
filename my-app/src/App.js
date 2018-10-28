import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Harry", age: 28 },
      { name: "Naomi", age: 26 }
    ]
  };

  switchNameHandler = newName => {
    // console.log(this);
    // do not do this: this.state.persons[0].name = "new name";
    this.setState({
      persons: [
        { name: newName, age: 280 },
        { name: "allen", age: 238 },
        { name: "Naomi", age: 26 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler.bind(this, "Harrold")}>
          change name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler}
        />
        <button onClick={() => this.switchNameHandler("zeus!")}>
          change name
        </button>
      </div>
    );
  }
}

export default App;

// create a component
// display component on screen
// use props in component
// pass in prop details
// display prop details
// create state for component
// pass into component
// create button that changes the state
// create method that updates the state
