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
import Img2 from '../img/image 2.svg';
import Img3 from '../img/image 3.svg';
import Img4 from '../img/image_crea.png';
import Img5 from '../img/image 8.svg';
import Card from 'react-bootstrap/Card';
import Reserver from '../img/Bouton réserver.svg'
import Reservation from '../img/RESERVER.svg'

function About() {

  const [usersList, setUsersList] = useState([]);

  const getUsers = () => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setUsersList(response.data);
    });
  };

  return (
    <div className="App img_acc">
    <Barnav />
        <div className="mb-2 margin_button">
          <Button href="#decouvrir" className='size_button amiko' variant='dark'>
            DÉCOUVRIR
          </Button>
      
        </div>
        <Container id="decouvrir" className='bandeaux'>
        <Row >
            <Col className='avatar-big'>
            <img src={Trailer} className='avatar-img rounded-circle'/>
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
        <img src={Img2} className='card_size'/>
        <div className='sub_card_size'>
          <div className='flex_Align'>
          <h2>THE CONJURING EXPERIENCE | </h2>
          <h2 className='poppins'> DARK ROOM</h2>
          </div>
          <p className='poppins int_18'>Expérience interdit au -18</p>
          <p className='text_font'>Revivez l'histoire d'un chef d'oeuvre cinématographique
          au travers d'un expérience aussi bien réaliste qu'immersive. Rassemblez ce qu'il
          vous reste de courage, les inspecteurs Ed et Loren Warren ont besoin de vous. Un malheur hante la maison de ces derniers
          et vous ne pouvez pas vous en échapper sans sacrifices. Serez-vous à la hauteur de ce qui vous attend? 
          Bonne chance, vous en aurez besoin!
          </p>
          <img src={Reserver} />
        </div>
        <img src={Img3} className='card_size'/>
        <div className='sub_card_size'>
          <div className='flex_Align'>
          <h2>ULTIMATE FIGHT | </h2>
          <h2 className='poppins'> BATTLE ROOM</h2>
          </div>
          <p className='text_font'>Sentez votre coeur battre, votre souffle se couper, votre concentration monter… 
          Enrôler des joueurs, formez votre équipe et préparez vous au combat !
           Arrachez la victoire à vos adversaires à travers une bataille dans des décors et des “maps” des plus immersives.
            En équipe de 4 ou 5 voyez lesquels vous sont digne de remporter le trophée.
          </p>
          <img src={Reserver} />
        </div>
        <img src={Img4} className='card_size'/>
        <div className='sub_card_size'>
          <div className='flex_Align'>
          <h2>CRÉEZ VOTRE PROPRE ÉXPERIENCE | </h2>
          <h2 className='poppins'> CREATIVE ROOM</h2>
          </div>
          <p className='text_font'>Vous en avez marre des expériences répétitives ! Vous êtes à la recherche d’une toute nouvelle expérience en réalité virtuelle ? 
            Alors venez créer votre propre expérience avec notre tout nouveau système de création virtuelle ! 
              Vous nous exposez votre idée et votre univers et nous le mettons en oeuvre rien que pour vous ! 
                N’attendez plus, c’est désormais votre création, votre univers, votre éxpérience, votre SENSE !
          </p>
          <img src={Reserver} />
        </div>
        <div className='reservation'>
          <img src={Reservation} className='img_reserv'/>
          <p className='reserv_font'>N'ATTTENDEZ PLUS, RÉSERVEZ</p>
          <p className='tarif'>NOS TARIFS</p>
        </div>
        

        <div classname='image_share'>
          <img src={Img5} classname='card_size'/>
        </div>
        <Footer/>
      </div>
    
  );
}

export default About;
