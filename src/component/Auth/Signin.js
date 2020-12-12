import React, { Component } from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import { Button, Form,Container,Row,Col } from 'react-bootstrap';
import {login} from '../../store/actions/securityActions';
import { compose } from "redux";

const InputComponent=({input,type,name,id,display})=>{
  return(
    <Form.Group controlId={name}>
    <Form.Label>{display}</Form.Label>
    <Form.Control type={type} name={name} id={id} placeholder={display} {...input}/>
  </Form.Group>);
};

export class Signin extends Component {

  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/users");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.security.validToken) {
      this.props.history.push("/users");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
    onSubmit = formProps => {
        this.props.login(formProps, () => {this.props.history.push('/users');
      });
      };
    
    render() {
        const { handleSubmit, pristine, submitting, loading } = this.props;
        
        return (
          <Container>
            <br></br>
          <Row>
            <Col/>
            <Col xs={3}><Form onSubmit={handleSubmit(this.onSubmit)} loading={loading}>
            <Field type="text" name="username" id="username" display="username" placeholder="username"  component={InputComponent}/>
            <Field type="password" name="password" id="password" display="password" placeholder="password"  component={InputComponent}/>
            <Button color="primary" type='submit' disabled={pristine || submitting}>Save</Button>
            </Form>
            </Col>
            <Col/>
          </Row>
          </Container>

        )
    }
}

const mapStateToProps = (state) => ({
    security:state.security,
    errorMessage:state.errors
   
})

const mapDispatchToProps = {login}

export default compose(connect(mapStateToProps, mapDispatchToProps),reduxForm({ form: 'Signin' }))(Signin);