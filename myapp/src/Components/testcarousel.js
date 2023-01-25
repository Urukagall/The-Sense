import Carousel from 'react-bootstrap/Carousel';
import Battle from '../img/BATTLE ROOM.svg';
import Creative from '../img/CREATIVE.svg';
import Light from '../img/LIGHT ROOM.svg';
import Dark from '../img/DARK ROOM.svg';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Battle}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p classname='text_font'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Creative}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p classname='text_font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Light}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p classname='text_font'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;