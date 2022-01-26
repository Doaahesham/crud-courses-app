import React, { Component } from "react";
import Item from "./Item";

class ListItem extends Component {
  state = {};
  render() {
    return (
      <div className="list-style">
        {console.log(this.props.courses)}
        <ul>
        {this.props.courses.map((course, id) => (
          <Item course={course} key={id} courses={this.props.courses} handleDelete={this.props.handleDelete}/>
        ))}
        </ul>
      </div>
    );
  }
}

export default ListItem;
