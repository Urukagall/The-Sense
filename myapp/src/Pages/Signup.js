// import "../App.css";
// import { useState } from "react";
// import Axios from "axios";
// import Barnav from '../Components/Navbar.js';
// import Footer from "../Components/Footer";
// import InputGroup from 'react-bootstrap/InputGroup';
// import Form from 'react-bootstrap/Form';

// function Signup() {
//   const [prenom, setPrenom] = useState("");
//   const [nom, setNom] = useState(0);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [wage, setWage] = useState(0);

//   const [newWage, setNewWage] = useState(0);

//   const [employeeList, setEmployeeList] = useState([]);

//   const addUsers = () => {
//     Axios.post("http://localhost:3001/createUsers", {
//       prenom: prenom,
//       nom: nom,
//       email: email,
//       password: password,
//     }).then(() => {
//       setEmployeeList([
//         ...employeeList,
//         {
//           prenom: prenom,
//           nom: nom,
//           email: email,
//           password: password,
//         },
//       ]);
//     });
//   };

//   return (
//     <div className="App img_signup">
      
//     <Barnav />
//       <div className='my_account amiko'>
//         <p>MON COMPTE</p>
//       </div>
//       <p  className="amiko create_account">Créer un compte</p>
//       <div className="information">
//         <InputGroup onChange={(event) => {
//             setNom(event.target.value);
//           }} className="mb-3">
//           <Form.Control
//             placeholder="Nom"
//           />
//         </InputGroup>
//         <InputGroup onChange={(event) => {
//             setPrenom(event.target.value);
//           }} className="mb-3">
//           <Form.Control
//             placeholder="Prenom"
//           />
//         </InputGroup>
//         <InputGroup onChange={(event) => {
//             setEmail(event.target.value);
//           }} className="mb-3">
//           <InputGroup.Text id="basic-addon3">
//             example@gmail.com
//           </InputGroup.Text>
//           <Form.Control id="basic-url" aria-describedby="basic-addon3" />
//         </InputGroup>
//         <InputGroup onChange={(event) => {
//             setPassword(event.target.value);
//           }} className="mb-3">
//           <Form.Control
//             placeholder="Password"
//           />
//         </InputGroup>
//         <button onClick={addUsers}>Signup</button>
//       </div>
//       <Footer/>
//     </div>
//   );
// }

// export default Signup;

import "../App.css";
import { isValidElement, useState } from "react";
import Axios from "axios";
import Barnav from '../Components/Navbar.js';
import Footer from "../Components/Footer";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

function Signup() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const history = useHistory();

  const addUsers = () => {
    if (password != "" && email != "" && prenom != "" && nom != "") {
      Axios.post("http://localhost:3001/createUsers", {
      prenom: prenom,
      nom: nom,
      email: email,
      password: password,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          prenom: prenom,
          nom: nom,
          email: email,
          password: password,
        },
      ]);
    });
    history.push("/");
    }
    
  };

  return (
    <div className="App img_signup">

    <Barnav />
      <div className='my_account amiko'>
        <p>MON COMPTE</p>
      </div>
      <p  className="amiko create_account">Créer un compte</p>
      <div className="compte">
        <div className="compte-text-align">
          <p className="amiko compte-text">Prénom</p>
          <p className="amiko compte-text">Nom</p>
          <p className="amiko compte-text">Email</p>
          <p className="amiko compte-text">Mot de passe</p>
        </div>
        <div className="compte-input">
          <input className="compte-item" onChange={(event) => {
             setPrenom(event.target.value);
           }}type="text"/>
          <input className="compte-item" onChange={(event) => {
             setNom(event.target.value);
           }}type="text"/>
          <input className="compte-item" onChange={(event) => {
             setEmail(event.target.value);
           }}type="text"/>
          <input className="compte-item" onChange={(event) => {
             setPassword(event.target.value);
           }}type="text"/>
        </div>
      </div>
      <Button onClick={addUsers} className='compte-button amiko' variant='dark'>
            Valider
          </Button>
      <Footer/>
    </div>
  );
}

export default Signup;