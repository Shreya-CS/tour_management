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
import experienceImg from '../assets/images/customer-feedback.png';
import gallery from '../components/image_gallery/gallery';
import MasonryImagesGallery from '../components/image_gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/newsletter';
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
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'} />
                <h2>Lorem ipsum dolor sit amet<br />Lorem, ipsum dolor.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit<br />Sit libero perspiciatis, nemo nostrum non officiis?
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successfull Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years of Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className="gallery__title">
                Visit us virtually through our gallery
              </h2>
            </Col>
            <Col lg='12' className='images'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Customer Love'} />
              <h2 className="testimonial__title">What our customers say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  )
}

export default Home
