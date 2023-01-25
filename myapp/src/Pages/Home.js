import Button from 'react-bootstrap/Button';
import '../style.css';
import React, { useEffect } from 'react';
import TheSense from '../img/SENSE.svg';
import Trailer from '../img/image 42.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Arrow from '../img/arrow.png'
import Carousel from '../Components/testcarousel.js';
import Battle from '../img/BATTLE ROOM.svg';
import Creative from '../img/CREATIVE.svg';
import Light from '../img/LIGHT ROOM.svg';
import Dark from '../img/DARK ROOM.svg';
import '../Components/testcarousel.js';
import Barnav from '../Components/Navbar.js';
import { useState } from "react";
import Axios from "axios";
import Footer from '../Components/Footer';
import Img1 from '../img/image 45.svg';
import Card from 'react-bootstrap/Card';
import Reserver from '../img/Bouton réserver.svg'

function Home() {

  const [usersList, setUsersList] = useState([]);

  const getUsers = () => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setUsersList(response.data);
    });
  };

  return (
    <div className="App img_acc">
    <Barnav />
      <div className='vir'>
        <p>QUAND LE VIRTUEL DEVIENT RÉEL</p>
      </div>
        <div className="mb-2 margin_button ">
          <Button className='size_button amiko' variant='dark'>
            Découvrir
          </Button>
      
        </div>
        <button onClick={getUsers}>Show Employees</button>
        {usersList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Name: {val.prenom}</h3>
                {console.log("a")}
                <h3>Age: {val.nom}</h3>
              </div>
              
            </div>
          );
        })}
        <Container className='bandeaux'>
        <Row >
            <Col className='avatar-big'>
            <img src={Trailer} className='avatar-img rounded-circle'/>
            </Col>
            <Col >
              <Row>
                <div className='flex_Align'>
                  <h2 className='tiltle_color'>QU'EST CE QUE</h2>
                  <img src={TheSense} className='the_Sense' />
                  <h2 className='tiltle_color'>?</h2>
                </div>
              </Row>
              <Row>
                <p className='text_font flex_Align'>Préparez-vous pour une expérience unique qui vous emmenera dans un autre univers. Vivez vos émotions comme vous ne l'avez jamais fait auparavant.
                    Avec THE SENSE explorez d'autres dimensions et vivez l'impossible en interragissant avec un environnement dynamique et virtuel.
                    Ce n'est pas une expérience en réalité virtuelle que vous vivez, c'est la réalité.
                </p>
              </Row>
              <Row>
                <div className='flex_Align'>
                <p className='discover'>DÉCOUVRIR THE SENSE</p>
                <img src={Arrow} className='arrow' />
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className='exp pres'>
          <div className='flex_Align'>
          <h2 className='tiltle_color'>
            LA RÉALITÉ À PORTÉE DE MAIN
          </h2>
          </div>
          <div className='flex_Align'>
            <p className='text_font'>
              Vous rêvez de voyagez, de frissoner ou tout simplement de vivre une expérience
              unique ? Explorez nos univers entre amis ou en famile et franchissez la frontière de la réalité.
              Plusieurs dimensions s'offrent à vous, vous donnant accès à de nombreuses expériences.
            </p>
          </div>
        </div>
        <img src={Img1} className='card_size'/>
        <div className='sub_card_size'>
          <div className='flex_Align'>
          <h2>SHANGRI-LA : LA CITÉ PERDUE DE Z | </h2>
          <h2 className='poppins'> LIGHT ROOM</h2>
          </div>
          <p className='text_font'>Shangri-La la cité mythique, symbole de paix, de prospérité
            et de magnificience. Personne n'a apparemment pu se rendre en ce lieu
            depuis des décennies ou prouver son existence, du moins depuis votre découverte !
            Aventurez-vous au plus profond des légendes, entrez dans la cité de Z avec votre équipe et explorez les lieux à la
            recherche de Percy Fawcette.
          </p>
          <img src={Reserver} />
        </div>
        <Footer/>
      </div>
    
  );
}

export default Home;
