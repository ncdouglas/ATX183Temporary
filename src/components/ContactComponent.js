import React, { Component } from 'react';
import { Form, FormGroup, Input, Row, Col, Label } from 'reactstrap';
import axios from 'axios';

class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }

    handleSubmit(e){
        e.preventDefault();
    
        axios({
          method: "POST", 
          url:"http://localhost:3002/send", 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
            alert("Message Sent."); 
            this.resetForm()
          }else if(response.data.status === 'fail'){
            alert("Message failed to send.")
          }
        })
      }

      resetForm(){
    
        this.setState({name: '', email: '', message: ''})
     }
  
  render() {
   return(
     <div>
     <Form className="form">
     <h1 style={{fontFamily: 'Special Elite, cursive'}}>Contact Us</h1>
        <FormGroup row>
          <Label for="name" sm={1} style={{fontFamily: 'Merriweather, serif'}}>Name:</Label>
          <Col sm={10}>
            <Input type="text" name="name" id="name" placeholder="enter your name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={1} style={{fontFamily: 'Merriweather, serif'}}>Email:</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="email" placeholder="myemail@here.co" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="message" style={{fontFamily: 'Merriweather, serif'}}>Message:</Label>
          <Col sm={10}>
            <Input type="textarea" name="messge" id="message" placeholder="write us a message" />
          </Col>
        </FormGroup>
     </Form>
     </div>
    //  <div className="Contact">
    //  <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
    //   <div className="form-group">
    //       <label htmlFor="name">Name:</label>
    //       <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
    //   </div>
    //   <div className="form-group">
    //       <label htmlFor="exampleInputEmail1">Email address:</label>
    //       <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
    //   </div>
    //   <div className="form-group">
    //       <label htmlFor="message">Message:</label>
    //       <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
    //   </div>
    //   <button type="submit" className="btn btn-primary">Submit</button>
    //   </form>
    //   </div>
   );
  }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
    onMessageChange(event) {
        this.setState({message: event.target.value})
      }
    }
    
    export default Contact;