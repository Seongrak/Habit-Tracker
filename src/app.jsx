import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "reading", count: 0 },
      { id: 2, name: "running", count: 0 },
      { id: 3, name: "coding", count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    /*
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    */
    const habits = this.state.habits.map((item) => {
      if (habit.id === item.id) {
        return { ...habit, count: habit.count + 1 };
      } else return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    /*
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    if (habits[index].count > 0) {
      habits[index].count--;
    }
    */
    const habits = this.state.habits.map((item) => {
      if (habit.id === item.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      } else return item;
    });

    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((item) => {
      if (item.count > 0) {
        return { ...item, count: 0 };
      }

      return item;
    });

    /*
    const habits = this.state.habits.map((habit) => {
      habit.count = 0;
      return habit;
    });
    */
    this.setState({ habits });
  };
  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
