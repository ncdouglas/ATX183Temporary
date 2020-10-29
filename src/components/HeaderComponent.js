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
                <Navbar dark className="navbar" sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src ="assets/images/logo.png" height="150" width="280" alt="mazimixing Hope logo"/></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <ButtonToggle className="dbutton" href='https://givebutter.com/MaxedHope'>Make a Donation</ButtonToggle>
                            <ButtonToggle className="abutton" href='https://www.amazon.com/hz/wishlist/ls/329W7PRMP2ZIY?ref_=wl_share'>Amazon Wishlist</ButtonToggle>
                        </Collapse>
                    </div>
                </Navbar>
            
        )
    }
}

export default Header;