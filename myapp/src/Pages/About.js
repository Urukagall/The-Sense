import Button from 'react-bootstrap/Button';
import '../style.css';
import React, { useEffect } from 'react';
import Trailer from '../img/dragon.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Arrow from '../img/arrow.png'
import Carousel from '../Components/testcarousel.js';
import Battle from '../img/BATTLE ROOM.svg';
import Creative from '../img/CREATIVE.svg';
import Light from '../img/LIGHT ROOM.svg';
import Dark from '../img/DARK ROOM.svg';
import Barnav from '../Components/Navbar.js';
import { useState } from "react";
import Axios from "axios";
import Footer from '../Components/Footer';
import Img1 from '../img/image 45.svg';
import Img2 from '../img/image 2.svg';
import Img3 from '../img/image 3.svg';
import Img4 from '../img/image_crea.png';
import Img5 from '../img/image 8.svg';
import Card from 'react-bootstrap/Card';
import Reserver from '../img/Bouton réserver.svg'
import Reservation from '../img/RESERVER.svg'

function About() {
  return (
    <div className="App">
      <div className='img_about'>
        <Barnav />
        <div className="margin_button decouvrir">
          <Button href="#decouvrir" className='size_button amiko' variant='dark'>
            DÉCOUVRIR
          </Button>
        </div>
      </div>
    
      <Container id="decouvrir" className='bandeaux'>
        <Row>
          <Col className='avatar-big'>
            <img src={Trailer} className='avatar-img-moche'/>
          </Col>
          <Col >
            <Row>
              <div className='flex_Align'>
                <h2 className='tiltle_color'>The Sense, une idée inovatrice</h2>
              </div>
            </Row>
            <Row>
              <p className='text_font flex_Align'>
                  The Sense est né d'un projet d'école de quatre étudiants en école de commerce. Se basant sur une idée originaire des États-Unis, les quatres amis décidèrent d'adapter ce concept inédit au marché français en y ajoutant leurs idées novatrices. Mélant deux ativité attractives, la Réalité Virtuel et les Escape Game, THE SENSE joint le meilleur des deux mondes pour vous proposer des expériences inédites et époustouflantes. N'hésitez plus et franchissez la frontière du réel.
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
        <div className='exp pres'>
          <div className='flex_Align'>
          <h2 className='tiltle_color'>
            Qui sommes nous ?
          </h2>
          </div>
          <div className='flex_Align'>
            <p className='text_font'>
              The Sense est une société formée par quatre étudiants en école de commerce qui détiennent la majorité des parts. Le restnat étant la propriété de DreamAway, entreprise francaise spécialiste du milieu de la VR.
            </p>

          </div>
        </div>
      <Footer/>
      </div>
      
    
  );
}

export default About;
