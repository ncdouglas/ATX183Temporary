import React, { Component } from 'react';
import { Navbar, NavbarBrand, Button } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <Navbar className="bg-dark" sticky="top" expand="md">
              <div className="container">
                  <NavbarBrand href="/" style={{color:'#00ADB5'}}>Maximizing Hope</NavbarBrand>
                  <Button  color="warning" className="float-right">Make a Donation</Button>
                  <Button  color="warning" className="float-right">Amazon Wishlist</Button>
              </div>
            </Navbar>
        )
    }
}

export default Header;