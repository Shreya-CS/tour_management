import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'
const newsletter = () => {
    return <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscribe to be a part of the tour family</h2>
                        <div className="newsletter__input">
                            <input type="email" placeholder='Enter your email address' />
                            <buttton className="btn newsletter__btn">Subscribe</buttton>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam vel commodi ut culpa rerum tempore fugiat adipisci ea labore reprehenderit.</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default newsletter
