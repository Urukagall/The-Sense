import Button from 'react-bootstrap/Button';
import '../style.css';
import React, { useEffect } from 'react';
import TheSense from '../img/SENSE.svg';
import Trailer from '../img/image 42.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useState } from "react";
import Axios from "axios";

function Home() {

  const [usersList, setUsersList] = useState([]);

  const getUsers = () => {
    Axios.get("http://localhost:3000/get").then((response) => {
      setUsersList(response.data);
    });
  };

  return (
    <div className="App">
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
            <Col>
              <Row>
                <div className='flex_Align'>
                  <h2>QU'EST CE QUE</h2>
                  <img src={TheSense} className='the_Sense' />
                </div>
              </Row>
              <Row>
                <p className='text_font'>Préparez-vous pour une expérience unique qui vous emmenera dans un autre univers. Vivez vos émotions comme vous ne l'avez jamais fait auparavant.
                    Avec THE SENSE explorez d'autres dimensions et vivez l'impossible en interragissant avec un environnement dynamique et virtuel.
                    Ce n'est pas une expérience en réalité virtuelle que vous vivez, c'est la réalité.
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Home;
