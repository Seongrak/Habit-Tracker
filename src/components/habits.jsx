import React, { Component } from "react";
import AddForm from "./addForm";
import Habit from "./habit";

class Habits extends Component {
  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  render() {
    return (
      <>
        <AddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          All Reset
        </button>
      </>
    );
  }
}

export default Habits;
