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
import Carousel from 'react-bootstrap/Carousel';
import TheSense from '../img/SENSE.svg';
import Trailer from '../img/photomoche.png';
import Img129 from '../img/image 129.svg' ;


function Crea() {
return(
    <div className="App experiencesDiv">
            <Barnav />
            <div>
                <Row className='Experiences'>
                    <Col />
                    <Col>
                        <a href="/Creative">
                            <img className='smallLight' href="/Creative" src={Light} />
                        </a>
                    </Col>
                    <Col>
                        <img className='smallDark' src={Dark} />
                    </Col>
                    <Col>
                        <img className='smallBattle' src={Battle} />
                    </Col>
                    <Col />
                </Row>

                <div>
                    <img className='lightExperience' src={Creative} />
                </div>

                <div className="mb-2 margin_button ">
                    <Button href="#decouvrir" className='size_button amiko' variant='dark'>
                        DÉCOUVRIR
                    </Button>
                </div>

                <Container id="decouvrir" className='bandeauxCreative'>
                    <Row >
                        <Col className='avatar-big'>
                            <img src={Trailer} className='avatar-img-moche' />
                        </Col>
                        <Col >
                            <Row>
                                <div className='flex_Align'>
                                    <h2 className='tiltle_color'>QU'EST CE QUE LA</h2>
                                    <img src={Creative} className='crealogo' />
                                    <h2 className='tiltle_color'>?</h2>
                                </div>
                            </Row>
                            <Row>
                                <p className='text_font flex_Align'>Notre catalogue ne vous suffit pas ? Vous aimeriez laisser parler 
                                votre imagination? Grâce à la CREATIVE ROOM, concept inédit en France, la créativité est votre seule 
                                limite, créez de toute pièce l'univers dans lequel vous voyagerez par la suite. Que ce soit dans la 
                                jungle ou en haut de montagnes enneigées, pour affronter des démons ou enquêter sur la disparition 
                                de bébés licornes roses fluos, le choix vous appartient. Alors tester votre imagination dans la 
                                CREATIVE ROOM et entraîner vos amis ou votre famille dans votre univers.
                                </p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        
            <div className='img_experience_2'>
                <div className='exp2 pres'>
                    <div className='flex_Align'>
                            <h2 className='tiltle_color'>
                                VOTRE EXPÉRIENCE ENTRE VOS MAINS
                            </h2>
                        </div>
                    <div className='flex_Align'>
                        <p className='text_font'>
                        Suivez les étapes pour créer votre propre aventure. Nous mettons à votre disposition la possibilité 
                        de choisir tous les éléments de votre room dans le but de vous offrir l'expérience ultime qui VOUS correspond. 
                        Basculez entre chaque étape, modifier vos choix à tout moment pour que ceux-ci correspondent à vos besoins.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <Carousel fade>
                    <Carousel.Item>
                    <img
                        className="w-100 denise"
                        src={Img129}
                        alt="retour personnel Light Room"
                        />
                    <Carousel.Caption className='blur_carousel'>
                        <h3>LES ÉQUIPEMENTS DE THE SENSE</h3>
                        <p className='amiko bold'>"Tout nos équipements sont prévus pour toutes les tailles et tous les âges, ils conviennent aussi bien aux adultes qu'aux jeunes de 12 ans.
                        Ils vous garantissent également un confort à toutes épreuves lors de vos voyages chez nous." 
                        </p>
                        
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            {/* Je le mets en commentaire cqr il nique la page c'est trop chiant c'est une dinguerie 
            Réponse: ah.
            ....... mouais*/}
            <Footer/>
            </div>
    </div>
    )
};

export default Crea;
