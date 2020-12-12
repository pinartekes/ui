import React, { Component } from "react";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/users");
    }
  }
  render() {
    return (
      <div align="center">
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h1>Users App</h1>

       
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps)(Landing);