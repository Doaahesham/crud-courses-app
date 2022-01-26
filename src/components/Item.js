import React, { Component, Fragment } from "react";

class Item extends Component {
  state = {
    isEdit: false,
  };

  istoggle = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  };
  renderForm = () => {
    return (
      <form>
        <input type="text" className="style-input input" value={this.props.course}/>
        <button>Update Course</button>
      </form>
    );
  };

  renderCourse = () => {
    return (
      <div>
        <li id="element">{this.props.course}</li>

        <div className="btns-style">
          <button className="style-btn" onClick={this.istoggle}>
            Edit Course
          </button>
          <button
            className="style-btn"
            onClick={() => this.props.handleDelete(this.props.course)}
          >
            Delete Course
          </button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <Fragment>
        {this.state.isEdit ? this.renderForm() : this.renderCourse()}
      </Fragment>
    );
  }
}

export default Item;
