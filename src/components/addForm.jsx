import React, { PureComponent } from "react";

class AddForm extends PureComponent {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className="addForm" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="addForm-input"
          placeholder="Habit"
        />
        <button className="addForm-btn">Submit</button>
      </form>
    );
  }
}

export default AddForm;
