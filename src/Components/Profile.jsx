import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ahmed",
      Profession: "Web developer",
      age: 20,
      show: false,
    };
  }
  showHandler = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        {this.state.show && (
          <div>
            <h1> {this.state.name} </h1>
            <p>
              {`I'm ${this.state.age} years old and I'm a ${this.state.Profession} `}
            </p>
          </div>
        )}

        <button onClick={this.showHandler}>
          {this.state.show ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

export default Profile;
