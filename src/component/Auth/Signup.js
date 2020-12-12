import React, { Component } from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import { Button, Form,Container,Row,Col } from 'react-bootstrap';
import {register} from '../../store/actions/securityActions';
import { compose } from "redux";
import { Redirect } from "react-router";

const InputComponent=({input,type,name,id,display})=>{
  return(
    <Form.Group controlId={name}>
    <Form.Label>{display}</Form.Label>
    <Form.Control type={type} name={name} id={id} placeholder={display} {...input}/>
  </Form.Group>);
};

export class Signup extends Component {
  state = {
    redirect: false,
  };
    onSubmit = formProps => {
        this.props.register(formProps, () => {this.props.history.push('/');});
        this.setState({ redirect: true });
      };
    
    render() {
        const { handleSubmit, pristine, submitting, loading } = this.props;
        
  
        return (
        <div>
          { this.state.redirect ?
            (<Redirect to="/signin" /> ) :(

          <Container>
            <br></br>
          <Row>
            <Col/>
            <Col xs={3}>
            <Form onSubmit={handleSubmit(this.onSubmit)} loading={loading}>
            <Field type="text" name="name" id="name" display="name" placeholder="name"  component={InputComponent}/>
            <Field type="text" name="surname" id="surname" display="surname" placeholder="surname"  component={InputComponent}/>
            <Field type="text" name="username" id="username" display="username" placeholder="username"  component={InputComponent}/>
            <Field type="password" name="password" id="password" display="password" placeholder="password"  component={InputComponent}/>
            <Button color="primary" type='submit' disabled={pristine || submitting}>Save</Button>
            </Form>
           </Col>
           <Col/>
           </Row>
           </Container>)} </div>
    );
    }
}

const mapStateToProps = (state) => ({
    security: state.security,
    errorMessage:state.errors
   
})

const mapDispatchToProps = {register}

export default compose(connect(mapStateToProps, mapDispatchToProps),reduxForm({ form: 'Signup' }))(Signup)