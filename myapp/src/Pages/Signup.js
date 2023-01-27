import React, { useState } from 'react';
import Cookies from 'js-cookie'
import  Axios  from 'axios';


const Signup = () => {
   const [email, setEmail] = useState('');
   const [pwd, setPwd] = useState('');

   const handle = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: pwd,
    }).then((response) => {
      {Cookies.set("password",pwd)}
      {Cookies.set("email",email)}
      console.log(Cookies.get)
    })
    
   };

   return (
      <div className="App">
      <h1>Email of the user:</h1>
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
      </div>
   ); 
};

export default Signup;