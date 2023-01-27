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
import Trailer from '../img/photomoche.png';
import Img1 from '../img/image 45.svg';
import Reserver from '../img/Bouton réserver.svg';
import Viking from '../img/image 65.svg';


function Experiences() {
    return (
        <div className="App experiencesDiv">
            <Barnav />
            <div>
                <Row className='Experiences'>
                    <Col />
                    <Col>
                        <img className='smallDark' src={Dark} />
                    </Col>
                    <Col>
                        <img className='smallBattle' src={Battle} />
                    </Col>
                    <Col>
                        <img className='smallCreative' src={Creative} />
                    </Col>
                    <Col />
                </Row>

                <div>
                    <img className='lightExperience' src={Light} />
                </div>

                <div className="mb-2 margin_button ">
                    <Button href="#decouvrir" className='size_button amiko' variant='dark'>
                        DÉCOUVRIR
                    </Button>
                </div>

                <Container id="decouvrir" className='bandeauxExperiences'>
                    <Row >
                        <Col className='avatar-big'>
                            <img src={Trailer} className='avatar-img-moche' />
                        </Col>
                        <Col >
                            <Row>
                                <div className='flex_Align'>
                                    <h2 className='tiltle_color'>QU'EST CE QUE LA</h2>
                                    <img src={Light} className='the_Sense' />
                                    <h2 className='tiltle_color'>?</h2>
                                </div>
                            </Row>
                            <Row>
                                <p className='text_font flex_Align'>Voyagez, explorez, découvrez LIGHT ROOM !
                                    Découvrez des paysages somptueux et des histoires palpitantes dans cette salle
                                    accessible pour toute la famille. Ici tout n'est qu'affaire d'émotions et de beauté,
                                    explorez les décors de nos expériences et partez à l'aventure en famille ou entre amis
                                    a partir de 12 ans. Il ne vous reste plus qu'à franchir le seuil de la LIGHT ROOM et
                                    à vous laisser transporter dans un voyage époustouflant. Vos émotions n'attendent que vous !
                                </p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='img_experience_2'>
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
                <img src={Img1} className='card_size' />
                <div className='sub_card_size_light'>
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
                <img src={Viking} className='card_size_viking' />
                <div className='sub_card_size_light'>
                    <div className='flex_Align'>
                        <h2>NORDRËNN : LA LEGENDE DE GLACE  | </h2>
                        <h2 className='poppins'> LIGHT ROOM</h2>
                    </div>
                    <p className='text_font'>Dans le froid du royaume Nördrenn, il est une légende qui raconte 
                    comment un guerrier obtint la force de l'ours et la clairvoyance du corbeau. Il est dit que 
                    pour conquérir la femme qu'il aimait, cet homme partit a la recherche du trône d'Odin, artefact perdu 
                    depuis des années, qui offrait, disait-on, le Père de Toute Chose. Le guerrier partit et ne revint jamais; 
                    on raconte qu'il aurait trouvé le trône mais, qu'avide de son pouvoir il ne le quitta plus. 
                    Partez à la découverte du royaume glacé de Nordrënne et retrouvez le guerrier de la légende.
                    </p>
                    <img src={Reserver} />
                </div>


            </div>
            <Footer />
        </div>

    )
}

export default Experiences;