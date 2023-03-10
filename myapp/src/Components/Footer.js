import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import '../style.css';
import ytbSense from '../img/ytbSense.png';
import twtSense from '../img/twtSense.png';
import instSense from '../img/instSense.png';
import fcbkSense from '../img/fcbkSense.png';
import Logo from '../img/Logo.svg';
import Image from "react-bootstrap/esm/Image";

function Footer() {
    return (
        <div className="footer"> 
        <Container>
            <Row>
                {/* Le truc tout a gauche */}
                <Col sml={3} className="Col-text">
                    <Row>
                        <Col className="footerText">Nous contacter</Col>
                        <Col className="footerText">Reservation</Col>
                        <Col className="footerText">FAQ</Col>
                    </Row>
                </Col>

                {/* Le copyright */}
                    <Col sml={4} className="Col-text">
                        <p className="footerText"> &copy; THE SENSE, SAS. Tous droits reserves </p>
                    </Col>

                {/* Le texte a droite */}
                    <Col sml={3} className="Col-text">
                        <Row>
                            <Col className="footerText">Modalites</Col>
                            <Col sml={1} className="footerText">|</Col>
                            <Col sml={8} className="footerText">Politique de confidentialite</Col>
                        </Row>
                    </Col>

                {/* Les images la */}
                    <Col sml={2} className="Col-image">
                        <Row>
                            <Col sml={3}>
                                 <img src={ytbSense} className="footerImage" alt="youtube"/> 
                            </Col>
                            <Col sml={3}>
                                 <img src={instSense} className="footerImage" alt="instagram"/> 
                            </Col>
                            <Col sml={3}>
                                 <img src={twtSense} className="footerImage" alt="twitter"/> 
                            </Col>
                            <Col sml={3}>
                                 <img src={fcbkSense} className="footerImage" alt="facebook"/> 
                            </Col>
                        </Row>
                    </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Footer;