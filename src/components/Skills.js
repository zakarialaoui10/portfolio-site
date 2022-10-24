import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import planet1 from '../assets/img/planet-1.svg';
import planet2 from '../assets/img/planet-2.svg';
import planet3 from '../assets/img/planet-3.svg';
import planet4 from '../assets/img/planet-4.svg';
import planet5 from '../assets/img/planet-5.svg';
import planet6 from '../assets/img/planet-6.svg';
import planet7 from '../assets/img/planet-7.svg';
import planet8 from '../assets/img/planet-8.svg';
import planet9 from '../assets/img/planet-9.svg';
import planet10 from '../assets/img/planet-10.svg';
import colorSharp from '../assets/img/color-sharp.png';
import { Col, Container, Row } from 'react-bootstrap';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='skill' id='skills'>
      <Container className='container'>
        <Row className='row'>
          <Col className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2>Skills</h2>
              <p>
                I'm a full-stack developer who<br></br> enjoys building stuff
                and learning new things every day.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='owl-carousel owl-theme skill-slider'
              >
                <div className='item'>
                  <img src={planet1} alt='ReactJS' />
                  <h5>JavaScript / TypeScript</h5>
                </div>
                <div className='item'>
                  <img src={planet2} alt='Planet' />
                  <h5>ReactJS / React Native</h5>
                </div>
                <div className='item'>
                  <img src={planet3} alt='Planet' />
                  <h5>Web Development</h5>
                </div>
                <div className='item'>
                  <img src={planet4} alt='Planet' />
                  <h5>NodeJS / NestJS</h5>
                </div>
                <div className='item'>
                  <img src={planet5} alt='Planet' />
                  <h5>Backend Development</h5>
                </div>
                <div className='item'>
                  <img src={planet6} alt='Planet' />
                  <h5>Python3</h5>
                </div>
                <div className='item'>
                  <img src={planet7} alt='Planet' />
                  <h5>Django / Wagtail</h5>
                </div>
                <div className='item'>
                  <img src={planet8} alt='Planet' />
                  <h5>MongoDB / GraphQL</h5>
                </div>
                <div className='item'>
                  <img src={planet9} alt='Planet' />
                  <h5>SQL / PostgreSQL</h5>
                </div>
                <div className='item'>
                  <img src={planet10} alt='Planet' />
                  <h5>Docker / GitLab</h5>
                </div>
                <div className='item'>
                  <img src={planet4} alt='Planet' />
                  <h5>Java</h5>
                </div>
                <div className='item'>
                  <img src={planet5} alt='Planet' />
                  <h5>Data Structures and Algorithms</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp} alt='Image' />
    </section>
  );
};
