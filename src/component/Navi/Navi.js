import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { connect } from 'react-redux';

class Navi extends Component {
  renderLinks() {
    if (this.props.security.validToken) {
      return (
        <React.Fragment>
    
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/users">
              Users
            </Nav.Link>
            <Nav.Link as={Link} to="/signout">
              Sign Out
            </Nav.Link>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Nav.Link as={Link} to="/signin">
              Sign In
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Sign Up
            </Nav.Link>
          </React.Fragment>
      );
    }
  }

  render(){
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">
          TASKMAN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          {this.renderLinks()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  security: state.security,
  errot: state.error,
});


export default connect(mapStateToProps)(Navi);