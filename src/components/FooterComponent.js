import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';


class Footer extends Component {
    render() {
        return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-md-3" style={{paddingTop: "10px"}}>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/MaxedHope"><FontAwesomeIcon icon={faFacebook} size="2x" className="site-footer"/></a>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/atxhomeless183"><FontAwesomeIcon icon={faInstagram} size="2x" className="site-footer"/></a>
                    </div>
                    <div className="col-md-3" style={{paddingTop: "10px"}}>
                    <a role="button" className="site-footer" href="https://www.google.com/maps/place/5114+Balcones+Woods+Dr+Suite+307-301,+Austin,+TX+78759/@30.4081782,-97.7491692,17z/data=!3m1!4b1!4m5!3m4!1s0x8644cc8bf7eb3d47:0xb289328373fd4a4b!8m2!3d30.4081736!4d-97.7469752"><FontAwesomeIcon icon={faMapMarkedAlt} /> 
                    &nbsp; 5114 Balcones Woods Dr.,<br/>
                        Suite 307-301, Austin, TX 78759
                    </a>
                    </div>
                    <div className="col-md-3" style={{paddingTop: "10px"}}>
                        <a role="button" className="site-footer" href="tel:+15128103355"><FontAwesomeIcon icon={faPhone} /> 512-810-3355</a>
                    </div>
                    <div className="col-md-3" style={{paddingTop: "10px"}}>
                        <a role="button" className="site-footer" href="hello@maximizinghope.org"><FontAwesomeIcon icon={faEnvelope} /> hello@maximizinghope.org</a>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
}

export default Footer;