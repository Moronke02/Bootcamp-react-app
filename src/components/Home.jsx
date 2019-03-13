import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';


export default class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
              <h2>TimeOff.Management</h2>
             <p>Open source,simple yet powerful absence managements<br> software for small and medium size business.</br></p>
              <p>Endorsed by hundreds of software developers.</p>
              <Link to="about">
                  <Button bsStyle="primary"> Sign Up</Button>
              </Link>
              <Row className="justify-content-md-center">
               <Col xs={12} sm={4} className="icon-wrapper">
                   <Image src="assets/holiday.jpg" circle className="profile-pic"/>
                   <h3>Use within own infrastructure</h3>
                   <p>Host application within your own infrastructure.As an open source software TimeOff.Management could be deployed into customer server without any enquires, not even email is needed!Integrate with own LDAP server.</p>
               </Col>
               <Col xs={12} sm={4} className="icon-wrapper">
                   <Image src="assets/ family.jpg" circle className="profile-pic"/>
                   <h3>Host in a cloud</h3>
                   <p>Just create an account and start using the application. We will issue PayPal invoice by the end of second month.Please contact us for more details.</p>
               </Col>
               <Col xs={12} sm={4} className="icon-wrapper">
                   <Image src="assets/healthcare.jpg" circle className="profile-pic"/>
                   <h3>Simple and flexible</h3>
                   <p>Fits into your organisation's workflow rather than force you to adopt it!Automated account setup and very intuitive user interface</p>
               </Col>
          </Row>
          </Jumbotron>

      </Container>
    )
  }
}
