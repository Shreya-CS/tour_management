import React, { useState, useEffect } from 'react';
import CommonSection from '../shared/CommonSection';
import '../styles/tours.css';
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar'
import Newsletter from '../shared/newsletter';
import tourData from '../assets/data/tours'
import { Container, Row, Col } from 'reactstrap'
const Tours = () => {
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)
  useEffect(() => {
    const pages = Math.ceil(5 / 4)
    setPageCount(pages)
  }, [page]);


  return (<>
    <CommonSection title={"All Tours"} />
    <section>
      <Container>
        <Row>
          <SearchBar></SearchBar>
        </Row>
      </Container>
    </section>
    <section className='pt-0'>
      <Container>
        <Row>
          {
            tourData?.map(tour => (<Col lg='3' className="mb-4" key={tour.id}><TourCard tour={tour} /></Col>))
          }
          <Col lg='12'>
            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-4">
              {[...Array(pageCount).keys()].map(number => (
                <span className={page === number ? "active__page" : ""} key={number} onClick={() => setPage(number)}>
                  {number + 1}
                </span>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Newsletter />
  </>
  );
}

export default Tours
