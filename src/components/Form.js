import React, { Component } from "react";
import ListItem from "./ListItem";

class Form extends Component {
  state = {};
  render() {
    return (
      <div>
        <form className="style-form">
          <input type="text" className="style-input"/>
          <input type="submit" className="style-btn" value="Add"/>
        </form>

        <ListItem/>
        
      </div>
    );
  }
}

export default Form;
