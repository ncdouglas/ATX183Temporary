import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, ButtonToggle } from 'reactstrap';

class Header extends Component {
    constructor(props){
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }   

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
                <Navbar className="navbar-dark bg-dark" sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="navbrand">Maximizing Hope</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <ButtonToggle className="dbutton" color="warning" outline color="warning">Make a Donation</ButtonToggle>
                            <ButtonToggle className="abutton" color="warning" outline color="warning">Amazon Wishlist</ButtonToggle>
                        </Collapse>
                    </div>
                </Navbar>
            
        )
    }
}

export default Header;