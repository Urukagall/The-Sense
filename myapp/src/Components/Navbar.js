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
          <Navbar.Brand href="/"><Image src ={Logo} className="LogoSize"></Image></Navbar.Brand>
          </Nav >
          
            <Nav className="justify-content-end">

            <Nav.Link href="/Signup" className='amiko'>Signup</Nav.Link>
            <Nav.Link className='amiko'><p>&#9474;</p></Nav.Link>
            <Nav.Link href="#news" className='amiko'>News</Nav.Link>
            <Nav.Link className='amiko'><p>&#9474;</p></Nav.Link>
            <Nav.Link href="#experience" className='amiko'>Nos Expériences</Nav.Link>
            <Nav.Link className='amiko'><p>&#9474;</p></Nav.Link>
            <Nav.Link href="#about" className='amiko'>À propos de nous</Nav.Link>
            <Nav.Link className='amiko'><p>&#9474;</p></Nav.Link>
            <Nav.Link href="#equipement" className='amiko'>Nos Équipements</Nav.Link>
            <Nav.Link className='amiko'><p>&#9474;</p></Nav.Link>
            <Nav.Link href="#connection" className='amiko bold'>Connexion</Nav.Link>
            </Nav>
          
          
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;