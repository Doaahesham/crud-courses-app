import React, { Component, Fragment } from "react";

class Item extends Component {
  //   handleEdit = (id) => {
  //     let input_item = document.querySelector(".input");
  //     // let element = document.getElementById("element");
  //     // document.getElementById("li-element").innerHTML=input_item

  //     input_item.style.display = "block";
  //     input_item.value = this.props.course;
  // }
  render() {
    return (
      <Fragment>
        <li id="element">{this.props.course}</li>
        {/* <input type="text" className="style-input input" /> */}

        <div className="btns-style">
          <button className="style-btn">Edit Course</button>
          <button
            className="style-btn"
            onClick={()=>this.props.handleDelete(this.props.course)}
          >
            Delete Course
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Item;
