import React, { useState } from 'react';
import Cookies from 'js-cookie'
import  Axios  from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const Login = () => {
   const [email, setEmail] = useState('');
   const [pwd, setPwd] = useState('');

   const handle = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: pwd,
    }).then((response) => {
      {Cookies.set("password",pwd)}
      {Cookies.set("email",email)}
      {Cookies.set("isLogin",true)}
      window.location.reload(false);
    })
   };

   return (
      <div className="App">
      <p>Email</p>
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
        <button onClick={handle}>Log In</button>{' '}
      <div>
        <a href="/Signup">Créer un Compte</a>
      </div>
      {/* <h1>Email of the user:</h1>
      <input
         placeholder="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
      />
      <h1>Password of the user:</h1>
      <input
         type="password"
         placeholder="Password"
         value={pwd}
         onChange={(e) => setPwd(e.target.value)}
      />
      <div>
        <button onClick={handle}>Log In</button>{' '}
      </div>
      <div>
        <a href="/Signup">Créer un Compte</a>
      </div> */}
      </div>
   ); 
};

export default Login;