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

  // handleUpdate = (item, newVal) => {
  //   let courses = this.state.courses;
  //   courses[item] = newVal;

  //   this.setState({
  //     courses,
  //   });
  //   console.log(this.state.courses);
  // };
  //update Course
  updateCourse = (item_course, newVal) => {
    let index = this.state.courses.map((course) => course).indexOf(item_course);
    if (index !== -1) {
      let copied = [...this.state.courses];
      copied[index] = newVal;
      this.setState({ courses: copied });
    }
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
          updateCourse={(item_course, newVal) =>
            this.updateCourse(item_course, newVal)
          }
        />
      </div>
    );
  }
}

export default Form;
