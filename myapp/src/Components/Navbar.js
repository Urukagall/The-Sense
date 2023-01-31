import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/esm/Image';
import Logo from '../img/Logo.svg';
import '../style.css';
import CreateModal from "./Modal.js"
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cookies from 'js-cookie'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Login from './LoginModal';
import Compte from './CompteModal';

if (Cookies.get("isLogin") == "true") {
    var ConnexionButton = "Mon Compte"
  } else {
    var ConnexionButton = "Connexion"
  }

  function MyVerticallyCenteredModal(props) {
      if (Cookies.get("isLogin") == "true") {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Mon Compte
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Compte/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      } else {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Connexion
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Login/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
   
    }

function ColorSchemesExample() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="background" variant="light">
        <Container fluid>
        <Navbar.Brand href="/">
          <Image src ={Logo} className="LogoSize"></Image>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav nav-align">
          <Nav className="justify-content-end">
              <Nav.Link href="/Signup" className='amiko nav-font-size'>Signup</Nav.Link>
              <Nav.Link className='amiko'><p className='hidden-mobile'>&#9474;</p></Nav.Link>
              <Nav.Link href="#news" className='amiko nav-font-size'>News</Nav.Link>
              <Nav.Link className='amiko'><p className='hidden-mobile'>&#9474;</p></Nav.Link>
              <Nav.Link href="/Experiences/Light Room" className='amiko nav-font-size'>Nos Expériences</Nav.Link>
              <Nav.Link className='amiko'><p className='hidden-mobile'>&#9474;</p></Nav.Link>
              <Nav.Link href="/About" className='amiko nav-font-size'>À propos de nous</Nav.Link>
              <Nav.Link className='amiko'><p className='hidden-mobile'>&#9474;</p></Nav.Link>
              <Nav.Link href="#equipement" className='amiko nav-font-size'>Nos Équipements</Nav.Link>
              <Nav.Link className='amiko'><p className='hidden-mobile'>&#9474;</p></Nav.Link>
              <Nav.Link id = "connection_modal" className='amiko bold' variant="primary" onClick={() => setModalShow(true)}>
                {ConnexionButton}
              </Nav.Link>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />   
          </Nav >
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;