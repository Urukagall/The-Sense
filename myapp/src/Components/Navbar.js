import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/esm/Image';
import Logo from '../img/Logo.svg';
import Col from 'react-bootstrap/esm/Col';
import '../style.css';

function ColorSchemesExample() {
  return (
    <>
      <Navbar className="background" variant="light">
        <Container fluid>
          <Nav className="me-auto">
          <Navbar.Brand href="#home"><Image src ={Logo} className="LogoSize"></Image></Navbar.Brand>
          </Nav >
          
            <Nav className="me-auto justify-content-end">

            <Nav.Link href="#news" className='amiko'>News</Nav.Link>
            <Nav.Link href="#experience" className='amiko'>Nos Expériences</Nav.Link>
            <Nav.Link href="#propos" className='amiko'>A propos de nous</Nav.Link>
            <Nav.Link href="#equipement" className='amiko'>Nos Equipements</Nav.Link>
            <Nav.Link href="#connexion" className='amiko'>Connexion</Nav.Link>

            </Nav>
          
          
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;