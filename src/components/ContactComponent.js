import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button} from 'reactstrap';
import axios from 'axios';

class Contact extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: '',
      formSubmitted: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  handleSubmit(e) {
    
    e.preventDefault();

    const {name, email, message} = this.state;

    axios.post('https://submit-form.com/rUNtHtruodFjtjYT4I-aa', {
      name, 
      email,
      message,
    })

    .then( res => {
     this.setState({name: '', email: '', message: '', formSubmitted : true  })
     setTimeout(() => {
      this.setState({...this.state, formSubmitted : false  })
     }, 3000 )
    })
  }

  render() {
    return(
      <div className="formcontainer">
        {this.state.formSubmitted ? <div className="formSubmitted">Thanks for contacting us!</div> : null}
      <Form onSubmit={this.handleSubmit}>
        <h1 style={{fontFamily: 'Special Elite, cursive'}}>Contact Us</h1>
        <FormGroup>
          <Label for="name" style={{fontFamily: 'Merriweather, serif'}}>Name:</Label>
            <Input 
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange} 
              placeholder="enter your name"
              required 
            />
        </FormGroup>
        <FormGroup>
          <Label for="email" style={{fontFamily: 'Merriweather, serif'}}>Email:</Label>
            <Input 
              type="email" 
              name="email" 
              value={this.state.email}
              onChange={this.handleChange} 
              placeholder="myemail@here.co" 
              required
            />
        </FormGroup>
        <FormGroup>
          <Label for="message" style={{fontFamily: 'Merriweather, serif'}}>Message:</Label>
            <Input 
              type="textarea" 
              name="message" 
              value={this.state.message}
              onChange={this.handleChange}  
              placeholder="write us a message" 
              required
            />
        </FormGroup>
        <Button type="submit" className="btn btn-primary">Submit</Button>
      </Form>
  
      </div>
   );
  }
}
    export default Contact;