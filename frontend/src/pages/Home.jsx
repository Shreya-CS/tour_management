import React from 'react'
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg2 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured_tours/FeaturedTourList';
const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                {/* <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Travel the World with Us'} />
                  <img src={worldImg} alt="" />
                </div> */}
                <h1>Lorem ipsum dolor, sit amet consectetur <span className='highlight'>Lorem</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur praesentium voluptatem magni deserunt quibusdam culpa nostrum reprehenderit placeat, dignissimos aliquam veniam modi corrupti quisquam!quibusdam culpa nostrum reprehenderit placeat, dignissimos aliquam veniam modi corrupti quisquam!</p>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg2} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">
                What we Serve
              </h5>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <div className='title'>
                <Subtitle className='title' subtitle={'Explore'} /></div>
              <h2 className='featured__tour-title'>Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home
