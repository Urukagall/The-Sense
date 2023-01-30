import Button from 'react-bootstrap/Button';
import '../style.css';
import React, { useEffect } from 'react';
import TheSense from '../img/SENSE.svg';
import Trailer from '../img/dragon.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Arrow from '../img/arrow.png'
import Carousel from 'react-bootstrap/Carousel';
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
import Img6 from '../img/image 9.svg';
import Img7 from '../img/Logo_Journal_Progres.png';
import Img8 from '../img/Lyonmag.png';
import Barre from '../img/barre.png';
import Card from 'react-bootstrap/Card';
import Reserver from '../img/Bouton réserver.svg'
import Reservation from '../img/RESERVER.svg'
import Cookies from 'js-cookie'
import Compteur from "../Components/Compteur.js"

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
        <div className="margin_button ">
          <Button href="#decouvrir" className='size_button amiko' variant='dark'>
            DÉCOUVRIR
          </Button>
      
        </div>
        {/* <button onClick={getUsers}>Show Employees</button> */}
        {usersList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Name: {val.prenom}</h3>
                <h3>Age: {val.nom}</h3>
              </div>
              
            </div>
          );
        })}
        <Container id="decouvrir" className='bandeaux'>
        <Row >
            <Col className='avatar-big'>
            <img src={Trailer} className='avatar-img-moche'/>
            </Col>
            <Col >
              <Row>
                <div className='flex_Align'>
                  <h2 className='title_color'>QU'EST CE QUE</h2>
                  <img src={TheSense} className='the_Sense' />
                  <h2 className='title_color'>?</h2>
                </div>
              </Row>
              <Row>
                <p className='text_font flex_Align'>Préparez-vous pour une expérience unique qui vous emmenera 
                dans un autre univers. Vivez vos émotions comme vous ne l'avez jamais fait auparavant. 
                Avec THE SENSE explorez d'autres dimensions et vivez l'impossible en interragissant avec 
                un environnement dynamique et virtuel. Ce n'est pas une expérience en réalité virtuelle que vous vivez, c'est la réalité.
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
          <h2 className='title_color'>
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
          <p className='reserv_font'>N'ATTENDEZ PLUS, RÉSERVEZ</p>
          <p className='tarif abel'>NOS TARIFS</p>
          <img src={Barre} className="barreReservation"/>
          <p className='vt'>Voir les tarifs pour</p>
          <p className='vt2'>(Max 8 joueurs)</p>
          <Compteur/>
          <div className='flex'>
            <img src={Dark} className='droom'/>
            <img src={Light} className='room'/>
            <img src={Battle} className='room'/>
            <img src={Creative} className='room'/>
          </div>
          <div className='flex'>
            <div className='flex_Align'>
            <p className='ttarif abel'>DE 10H À 18H : 17€ / </p>
            <p className='pers poppinsExtraLight'>Personne</p>
            </div>
            <div className='flex_Align'>
            <p className='ttarif abel'>DE 10H À 18H : 15€ / </p>
            <p className='pers poppinsExtraLight'>Personne</p>
            </div>
            <div className='flex_Align'>
            <p className='ttarif abel'>DE 10H À 18H : 15€ / </p>
            <p className='pers poppinsExtraLight'>Personne</p>
            </div>
            <div className='flex_Align'>
            <p className='ttarif abel'>DE 10H À 18H : 15€ / </p>
            <p className='pers poppinsExtraLight '>Personne</p>
            </div>
          </div>
          <div className='flex'>
            <div className='flex_Align'>
            <p className='ttarif abel'>DE 18H À 21H : 22€ / </p>
            <p className='pers poppinsExtraLight'>Personne</p>
            </div>
            <div className='flex_Align'>
            <p className='ttarif abel'>DE 18H À 21H : 18€ / </p>
            <p className='pers poppinsExtraLight'>Personne</p>
            </div>
            <div className='flex_Align'>
            <p className='ttarif abel'>DE 18H À 21H : 18€ / </p>
            <p className='pers poppinsExtraLight'>Personne</p>
            </div>
            <div className='flex_Align'>
            <p className='ttarif abel'>DE 18H À 21H : 18€ / </p>
            <p className='pers poppinsExtraLight'>Personne</p>
            </div>
          </div>
        </div>
        <div className='vect35'>
        <div>
          <h2 className='news amiko bold'>
            Les News du mois
          </h2>
        </div>
          <div className='flex'>
            <img src={Img5} classname='card_size'/>
            <img src ={Img6} classname='card-size' />
          </div>
          <div className='flex'>
            <div className='smol_sub_card_size'>
              <h3 className='amiko bold'>ÉVÉNEMENT : DE L'AMOUR DANS L'AIR</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
               ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
               voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
               sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className='smol_sub_card_size'>
              <h3 className='amiko bold'>UN NOUVEL ÉQUIPEMENT ARRIVE !</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
              
        </div>
        
        <Container id="decouvrir" className='bandeaux'>
        <Row >
            <Col className='avatar-big'>
            <img src={Img7} className='progres'/>
            <p className='text_font flex_Align'>"C'est la meilleure manière de faire découvrir l'éxpérience VR 
            à vos enfants et vos grands-parents mais aussi de changer des perpétuels bowlings ou séance de cinéma du week-end"
                </p>
            </Col>
            <Col >
            <img src={Img8} className='mag' />
            <p className='text_font flex_Align'>"Bluffé par la qualité du service, que ce soit l'a  ceuil et la prise en charge du groupe.
            Quand à l'expérience, rien à dire, c'est une éxpérience unique au monde"</p>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    
  );
}

export default Home;