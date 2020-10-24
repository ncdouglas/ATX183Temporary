import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

class About extends Component {
    render() {
        return (
            <div className="container">
                <Card>
                    <CardImg src="assets/images/main.jpg" alt="placeholder" />
                    <CardBody>
                        <CardTitle>Welcome!</CardTitle>
                        <CardText>
                        Maximizing Hope works to bridge the gap between people experiencing homelessness and 
                        social services in Central Texas. We strive for meaningful interactions at each tent.
                        Our primary focus is the 183N corridor from Pond Springs to Lamar Blvd, Austin. We strive 
                        to find sustainable solutions for each unique individual around Nutrition, Income Generation, 
                        Physical Health, and Shelter, as well as assist in obtaining Identification.
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default About;