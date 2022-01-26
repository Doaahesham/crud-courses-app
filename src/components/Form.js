import React, { Component } from "react";
import ListItem from "./ListItem";

class Form extends Component {
  state = {
    input: "",
    courses: ["html", "css"],
  };
  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (document.querySelector(".style-input").value === "") {
      return alert("please enter input");
    }
    // console.log(this.state.input);
    this.setState({ courses: [...this.state.courses, this.state.input] });
    // console.log(this.state.courses);
    document.querySelector(".style-input").value = "";
  };

  handleDelete = (item_course) => {
    this.setState({
      courses: this.state.courses.filter((course) => course !== item_course),
    });
    console.log(this.state.courses);
  };

  render() {
    return (
      <div>
        <form className="style-form">
          <input
            type="text"
            className="style-input"
            onChange={this.handleInput}
          />
          <button className="style-btn" onClick={this.handleSubmit}>
            Add
          </button>
        </form>

        <ListItem
          courses={this.state.courses}
          handleDelete={(item_course) => this.handleDelete(item_course)}
        />
      </div>
    );
  }
}

export default Form;
