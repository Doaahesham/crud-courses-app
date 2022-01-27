import React, { Component, Fragment } from "react";

class Item extends Component {
  state = {
    isEdit: false,
    inputVal: "",
  };

  istoggle = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  };

  handleChange = (e) => {
    this.setState({ inputVal: e.target.value });
    console.log(this.state.inputVal);
  };

  // handleUpdate=(e)=>{
  //  e.preventDefault()
  //   this.props.updateCourse(this.props.course,this.state.inputVal)
  //   this.props.renderCourse()
  // }

  // handleUpdateCourse =(e)=>{
  // e.preventDefault()
  // this.props.handleUpdate(this.props.course,this.input.newValue)
  // this.istoggle()
  // }

  // renderForm = () => {
  //   return (
  //     <form>
  //       <input
  //         // ref={(v)=>{this.input=v}}
  //         type="text"
  //         className="style-input input"
  //         defaultValue={this.props.course}
  //         onChange={(e) => {
  //           this.handleChange(e);
  //         }}
  //       />
  //       <button onClick={(e) => this.handleUpdate(e)}>Update Course</button>
  //     </form>
  //   );
  // };

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
  
  
  handleUpdate = (e) => {
    e.preventDefault();
    this.props.updateCourse(this.props.course, this.state.inputVal);
    this.renderCourse();
    this.istoggle();
  };

    renderForm = () => {
    return (
      <form>
        <input
          // ref={(v)=>{this.input=v}}
          type="text"
          className="style-input input"
          defaultValue={this.props.course}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <button onClick={(e) => this.handleUpdate(e)}>Update Course</button>
      </form>
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
