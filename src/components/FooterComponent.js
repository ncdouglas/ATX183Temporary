import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-6 col-sm-3 center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook-square" /></a>{' '}
                    </div>
                    <div className="col-6 col-sm-3 center">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> notreal@notreal.co</a>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
}

export default Footer;