import React, { useState } from 'react';
import Cookies from 'js-cookie'
import  Axios  from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const Compte = () => {
   const [email, setEmail] = useState('');
   const [pwd, setPwd] = useState('');

   const handle = () => {
      {Cookies.set("password","")}
      {Cookies.set("email","")}
      {Cookies.set("isLogin",false)}
      window.location.reload(false);
   };

   return (
      <div className="App">
      {/* <p>Email</p>
        <InputGroup onChange={(event) => {
            setEmail(event.target.value);
          }} className="mb-3">
          <InputGroup.Text id="basic-addon3">
            example@gmail.com
          </InputGroup.Text>
          <Form.Control id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>
      <p>Mot de passe</p>
        <InputGroup onChange={(event) => {
            setPwd(event.target.value);
          }}>
          <Form.Control
            placeholder="Mot de passe"
          />
        </InputGroup>
        <button onClick={handle}>Log In</button>{' '} */}
      <div>
        <button onClick={handle}>Log Out</button>{' '}
      </div>
      <div>
        <a href="/Signup">Créer un Compte</a></div>
      </div>
   ); 
};

export default Compte;