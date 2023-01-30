import Button from 'react-bootstrap/Button';
import "../style.css"
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import React, { useState } from 'react';

function Compteur(props){
    const [count, setCount] = useState(0);
    //on utilise setCount pour modifier la valeur de count !
    return <>
        <div className = 'compteur'>
            <Row className="justify-content-md-center">
                <Col xs lg="1">
                    <button onClick={()=>setCount(count-1)}>-</button>
                </Col>
                <Col md="auto"><p>{count}</p></Col>
                <Col xs lg="1">
                    <button onClick={()=>setCount(count+1)}>+</button>
                </Col>
            </Row>
        </div>
    </>;
}

export default Compteur;