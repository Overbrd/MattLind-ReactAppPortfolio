import { Container, Row, Col } from "react-bootstrap";
import './Contact.css'


const Contact = () => {

    return(
        <Container style={{paddingTop: '50px'}} >
            <Row >
            <Col md={6} className="c-left" >
            <h1 >Get in Touch</h1>
            <h1 className="yellow">Contact Matthew C. Lind</h1>
			<h4>I can be reached by email at mattlindfl@mail.com.</h4>
			
            </Col>
            <Col md={6} className="c-right">
                
            </Col>
            </Row>
        </Container>
    )
}

export default Contact