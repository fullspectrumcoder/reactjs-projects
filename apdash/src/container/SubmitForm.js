import React, { Component } from 'react';
import {  Row, Col, Form, FormGroup, Input } from 'reactstrap';


var initialState = {
    fname: '', 
    email: '', 
    message: '', 
    nameError: '', 
    emailError: '', 
    messageError: ''
}

export default class SubmitForm extends Component{    

    constructor(props) {
        super(props);
        this.state = initialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    valid() {
        var nameError = "", emailError = "" , messageError = "";
 
        if(!this.state.fname)
        {
            nameError = 'This field is required';
        }

        if(!this.state.email.includes('@'))
        {
            emailError = 'This field is required';
        }

        if(!this.state.message)
        {
            messageError = 'This field is required';
        }

        if(nameError || emailError || messageError)
        {
            this.setState({nameError, emailError, messageError});
            return false;
        }

        return true;

    }
    
    handleSubmit = (event) => {        
        var isValid = this.valid();
        if(isValid)
        {
            alert('Your Form Has Been Submitted');
            //Clear Form
            this.setState(initialState);
        }       
        event.preventDefault();
    }
      
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <Input type="text" name="fname" id="fname"  value={this.state.fname}  onChange={this.handleChange} placeholder="Enter Name"  />
                            <span>{this.state.nameError}</span>
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup>
                            <Input type="email" name="email" id="email"  value={this.state.email}  onChange={this.handleChange} placeholder="Enter Email"  />
                            <span>{this.state.emailError}</span>
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup>
                            <Input type="textarea" name="message" id="message"  value={this.state.message}  onChange={this.handleChange}  placeholder="Message Here..."  />
                            <span>{this.state.messageError}</span>
                        </FormGroup>
                    </Col>
                </Row>                                
                <button type="submit" className="btn btn-primary animated-btn">Send Message</button>
            </Form>
        )
    }
}
