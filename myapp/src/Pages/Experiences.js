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
import PhotoMoche from '../img/photomoche.png';
import Img45 from '../img/image 45.svg';
import Reserver from '../img/Bouton réserver.svg';
import Img65 from '../img/image 65.svg';
import Img94 from '../img/Rectangle 94.svg';
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function Experiences() {

    const [res, setRes] = useState('');
    const { id } = useParams()

    // Récupération des données de la salle

    useEffect(() => {
        Axios.post("http://localhost:3001/getRoom", {
            roomName: id,
        }).then((response) => {
            setRes(response.data[0])
        })
    },[]);
    
    return (
        <div className={res.BackgroundTop}>

            {/* BarNav */}

            <Barnav />
            <div>

                {/* Affichage des logo des autres sales avec liens intégrer */}

                <Row className='Experiences'>
                    <Col />
                    <Col>
                        <a href={res.LinkOtherRoom1}>
                        <img className='smallDark' src={res.LogoOtherRoom1} />
                        </a>
                    </Col>
                    <Col>
                        <a href={res.LinkOtherRoom2}>
                        <img className='smallBattle' src={res.LogoOtherRoom2} />
                        </a>
                    </Col>
                    <Col>
                        <a href={res.LinkOtherRoom3}>
                            <img className='smallCreative' src={res.LogoOtherRoom3} />
                        </a>
                    </Col>
                    <Col />
                </Row>

                {/* Logo de la salle */}

                <div>
                    <img className='lightExperience' src={res.LogoRoom} />
                </div>

                <div className="mb-2 margin_button ">
                    <Button href="#decouvrir" className='size_button amiko' variant='dark'>
                        DÉCOUVRIR
                    </Button>
                </div>

                {/* Banniére de la salle */}

                <Container id="decouvrir" className={res.BackgroundBanner}>
                    <Row >
                        <Col className='avatar-big'>
                            <img src={res.ImgBanner} className='avatar-img-moche' />
                        </Col>
                        <Col >
                            <Row>
                                <div className='flex_Align'>
                                    <h2 className={res.ColorTitleBanner}>QU'EST CE QUE LA</h2>
                                    <img src={res.LogoRoom} className='the_Sense' />
                                    <h2 className={res.ColorTitleBanner}>?</h2>
                                </div>
                            </Row>
                            <Row>
                                <p className={res.ColorDescRoom}>
                                    {res.RoomDesc}
                                </p>
                                <p className='text_font flex_Align red'>
                                    {res.RoomAdver}
                                    
                                </p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        
            <div className={res.BackgroundBottom}>
                <div>

                    {/* Slogan de la salle */}

                    <div>
                        <div className='flex_Align'>
                            <h2 className={res.ColorTitleRoom}>
                                {res.RoomTitle}
                            </h2>
                        </div>
                    </div>
                    
                    {/* Expérienc 1 */}

                    <img src={res.ImgExp1} className='card_size' />
                    <div className={res.BackgroundCard}>
                        <div className='flex_Align'>
                            <h2 className={res.ColorExpName}>{res.ExpName1}</h2>
                            <h2 className={res.ColorRoomName}>{res.RoomName}</h2>
                        </div>
                        <div>
                            <p className='text_font red flex_align'>{res.ExpAdver}</p>
                        </div>
                        <p className={res.ColorDescRoom}>
                            {res.ExpDesc1}
                        </p>
                        <img src={res.ImgBouton} />
                    </div>

                    {/* Expérienc 2 */}

                    <img src={res.ImgExp2} className='card_size_viking' />
                    <div className={res.BackgroundCard}>
                        <div className='flex_Align'>
                            <h2 className={res.ColorExpName}>{res.ExpName2}</h2>
                            <h2 className={res.ColorRoomName}>{res.RoomName}</h2>
                        </div>
                        <div>
                            <p className='text_font red flex_align'>{res.ExpAdver}</p>
                        </div>
                        <p className={res.ColorDescRoom}>
                            {res.ExpDesc2}
                        </p>
                        <img src={res.ImgBouton} />
                    </div>

                </div>
            </div>

                {/* Carousel */}

                <Carousel fade>
                    <Carousel.Item>
                    <img
                        className="w-100 denise"
                        src={Img94}
                        alt="retour personnel Light Room"
                        />
                    <Carousel.Caption className='blur_carousel'>
                        <p className='amiko bold'>"C'est dingue, j'ai vraiment eu l'impression d'être transporté dans un autre monde. 
                        Avant je ne faisais pas d'expérience VR car je ne croyais pas en la qualité mais grâce à The Sense, j'ai pu traverser la frontière du réel." 
                        </p>
                        <h3>- Denise, 23 Octobre 2020 -</h3>
                        
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="w-100 denise"
                        src={Img94}
                        alt="retour personnel Light Room"
                        />
                    <Carousel.Caption className='blur_carousel'>
                        <p className='amiko bold'>"Je ne savais pas à quoi j'allais m'attendre et je n'ai absolument pas été déçu,
                        C'est une expérience incroyable en VR que tout de le monde devrait essayer à The Sense!" 
                        </p>
                        <h3>- Diego, 28 Février 2021 -</h3>
                        
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            {/* Footer */}

            <Footer />
        </div>

    )
}

export default Experiences;