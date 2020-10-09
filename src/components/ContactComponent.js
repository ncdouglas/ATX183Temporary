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
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  async handleSubmit(e) {
    e.preventDefault()

    const {name, email, message} = this.state

    const form = await axios.post('https://mailthis.to/hello@maximizinghope.com', {
      name, 
      email,
      message
    })
  }

  render() {
    return(
      <div>
      <Form onSubmit={this.handleSubmit} style={{width: '600px'}}>
        <h1 style={{fontFamily: 'Special Elite, cursive'}}>Contact Us</h1>
        <FormGroup>
          <Label for="name" style={{fontFamily: 'Merriweather, serif'}}>Name:</Label>
            <Input 
              type="text"
              name="name"
              onChange={this.handleChange} 
              placeholder="enter your name" 
            />
        </FormGroup>
        <FormGroup>
          <Label for="email" style={{fontFamily: 'Merriweather, serif'}}>Email:</Label>
            <Input 
              type="email" 
              name="email" 
              onChange={this.handleChange} 
              placeholder="myemail@here.co" 
            />
        </FormGroup>
        <FormGroup>
          <Label for="message" style={{fontFamily: 'Merriweather, serif'}}>Message:</Label>
            <Input 
              type="textarea" 
              name="messge" 
              onChange={this.handleChange}  
              placeholder="write us a message" />
        </FormGroup>
        <Button type="submit" className="btn btn-primary">Submit</Button>
      </Form>
      </div>
   );
  }
}
    export default Contact;