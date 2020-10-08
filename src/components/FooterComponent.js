import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


class Footer extends Component {
    render() {
        return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col">
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} size="2x" className="site-footer"/></a>
                    </div>
                    <div className="col" style={{paddingTop: "10px"}}>
                        <a role="button" className="site-footer" href="tel:+12065551234"><FontAwesomeIcon icon={faPhone} /> 1-206-555-1234</a>
                    </div>
                    <div className="col" style={{paddingTop: "10px"}}>
                        <a role="button" className="site-footer" href="mailto:notreal@notreal.co"><FontAwesomeIcon icon={faEnvelope} /> notreal@notreal.co</a>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
}

export default Footer;