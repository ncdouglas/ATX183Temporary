import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


class Footer extends Component {
    render() {
        return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col">
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/MaxedHope"><FontAwesomeIcon icon={faFacebook} size="2x" className="site-footer"/></a>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/atxhomeless183"><FontAwesomeIcon icon={faInstagram} size="2x" className="site-footer"/></a>
                    </div>
                    <div className="col" style={{paddingTop: "10px"}}>
                        <a role="button" className="site-footer" href="tel:+12065551234"><FontAwesomeIcon icon={faPhone} /> 512-810-3355</a>
                    </div>
                    <div className="col" style={{paddingTop: "10px"}}>
                        <a role="button" className="site-footer" href="mailto:notreal@notreal.co"><FontAwesomeIcon icon={faEnvelope} /> hello@maximizinghope.org</a>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
}

export default Footer;