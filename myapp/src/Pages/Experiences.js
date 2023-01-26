import Battle from '../img/BATTLE ROOM.svg';
import Creative from '../img/CREATIVE.svg';
import Light from '../img/LIGHT ROOM.svg';
import Dark from '../img/DARK ROOM.svg';
import Barnav from '../Components/Navbar.js';
import Footer from '../Components/Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import TheSense from '../img/SENSE.svg';
import Trailer from '../img/image 42.svg';

function Experiences() {
    return (
        <div  className="App experiencesDiv">
            <Barnav/>
            <div>
                <Row className='Experiences'>
                    <Col/>
                    <Col>
                        <img className='smallDark' src={Dark}/>
                    </Col>
                    <Col>
                        <img className='smallBattle' src={Battle}/>
                    </Col>
                    <Col>
                        <img className='smallCreative' src={Creative}/>
                    </Col>
                    <Col/>
                </Row>

                <div>
                    <img className='lightExperience' src={Light}/>
                </div>

                <div className="mb-2 margin_button ">
                    <Button href="#decouvrir" className='size_button amiko' variant='dark'>
                        DÉCOUVRIR
                    </Button>
                </div>

                <Container id="decouvrir" className='bandeauxExperiences'>
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
                        </Col>
                    </Row>
                </Container>

            </div>
            <Footer/>
        </div>

    )
}

export default Experiences;