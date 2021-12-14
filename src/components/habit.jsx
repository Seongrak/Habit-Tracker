import React, { PureComponent } from "react";

class Habit extends PureComponent {
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={(event) => this.props.onIncrement(this.props.habit)}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={(event) => this.props.onDecrement(this.props.habit)}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={(event) => this.props.onDelete(this.props.habit)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
