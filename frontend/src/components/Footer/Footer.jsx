import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
const quick__links = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/tours',
    display: 'Tours',
  },
];

const quick__links2 = [
  {
    path: '/gallery',
    display: 'Gallery',
  },
  {
    path: '/login',
    display: 'Login',
  },
  {
    path: '/register',
    display: 'Reister',
  },
]
const Footer = () => {

  const year = new Date().getFullYear()
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='3'>
          <div className="logo">
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eaque veniam repudiandae fugit at minima, impedit est alias iusto velit.</p>
            <div className="social__links d-flex align-items-center gap-4">
              <span><Link to="#"><i className='ri-youtube-line'></i></Link></span>
              <span><Link to="#"><i className='ri-github-fill'></i></Link></span>
              <span><Link to="#"><i className='ri-facebook-circle-line'></i></Link></span>
              <span><Link to="#"><i className='ri-instagram-line'></i></Link></span>
            </div>
          </div>
        </Col>
        <Col lg='3' className='discover'>
          <h5 className='footer__link-title'>Discover</h5>
          <ListGroup className='footer__quick-links'>
            {
              quick__links.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link className='discover' to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <Col lg='3'>
          <h5 className='footer__link-title'>Quick Links</h5>

          <ListGroup className='footer__quick-links'>
            {
              quick__links2.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <Col lg='3'>
          <h5 className='footer__link-title'>Contact</h5>

          <ListGroup className='footer__quick-links'>
            <ListGroupItem className='ps-0 border-0 d-fex align-items-center gap-3'>
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i className='ri-map-pin-line'></i></span>
                <p className='mb-0'>Coimbatore , Bangalore</p>
              </h6>
            </ListGroupItem>
            <ListGroupItem className='ps-0 border-0 d-fex align-items-center gap-3'>
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i className='ri-mail-line'></i></span>
                <p className='mb-0'>abc@gmail.com</p>
              </h6>

            </ListGroupItem>
            <ListGroupItem className='ps-0 border-0 d-fex align-items-center gap-3'>
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i className='ri-phone-fill'></i></span>
                <p className='mb-0'>+91 2356974532</p>
              </h6>

            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col lg='12' className='text-center pt-5'>
          <p className="copyright">Copyright {year} , design and developed by Touristor.All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer
