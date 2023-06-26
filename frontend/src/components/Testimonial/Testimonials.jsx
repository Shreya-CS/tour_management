import React from 'react'
import Slider from 'react-slick'
import ava1 from '../../assets/images/ava-1.jpg'
import ava2 from '../../assets/images/ava-2.jpg'
import './testimonial.css'

const Testimonials = () => {
    const dotStyles = {
        backgroundColor: 'red', // Change the color to your desired value
    };
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    }
    return (
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo labore amet praesentium delectus harum eligendi ratione quasi? Asperiores delectus ipsa vel tenetur, optio exercitationem facere provident, aspernatur deserunt eius commodi. Distinctio expedita hic recusandae accusamus fuga enim nesciunt natus.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava1} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h5 className='mb-0 mt-3'>Name</h5>
                        <p>Customer 1</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo labore amet praesentium delectus harum eligendi ratione quasi? Asperiores delectus ipsa vel tenetur, optio exercitationem facere provident, aspernatur deserunt eius commodi. Distinctio expedita hic recusandae accusamus fuga enim nesciunt natus.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava2} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h5 className='mb-0 mt-3'>Name</h5>
                        <p>Customer 1</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo labore amet praesentium delectus harum eligendi ratione quasi? Asperiores delectus ipsa vel tenetur, optio exercitationem facere provident, aspernatur deserunt eius commodi. Distinctio expedita hic recusandae accusamus fuga enim nesciunt natus.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava1} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h5 className='mb-0 mt-3'>Name</h5>
                        <p>Customer 1</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo labore amet praesentium delectus harum eligendi ratione quasi? Asperiores delectus ipsa vel tenetur, optio exercitationem facere provident, aspernatur deserunt eius commodi. Distinctio expedita hic recusandae accusamus fuga enim nesciunt natus.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava2} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h5 className='mb-0 mt-3'>Name</h5>
                        <p>Customer 1</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo labore amet praesentium delectus harum eligendi ratione quasi? Asperiores delectus ipsa vel tenetur, optio exercitationem facere provident, aspernatur deserunt eius commodi. Distinctio expedita hic recusandae accusamus fuga enim nesciunt natus.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava1} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h5 className='mb-0 mt-3'>Name</h5>
                        <p>Customer 1</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonials
