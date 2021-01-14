import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from '../../image/programmer-1.jpg'
import header from '../../image/m.jpg'
import './StarIt.css'
const StarIt = () => {
    return (
        <div>
            <div  style={{backgroundImage: `url(${header})`}} className="star-it-area">
                <div className="">
                <Row>
                <Col md={4}>
                   <div className="star-it-img">
                   <img src={img} alt="" className="img-fluid"/>
                   </div>
                </Col>
                <Col md={8}>
                   <div className="star-it-text">
                    <h3>
                 Star IT - The Best Software Company
                  in Bangladesh
                  </h3>
                  <p>Star IT is a software and IT solution provider based in Dhaka, Bangladesh. Our enterprise consists of well experienced employees. We have been in the IT industry for more 
                      than 8 years. At Star IT, we leverage our skills and innovativity in creating a diverse software solution for our precious clients. We offer technical expertise along with seamless customer service.

                      Our services are designed to keep the users 
                    captivated into your web platform. We have provided versatile solutions for all kinds of business and platforms including some government agencies, ride sharing platform and foreign clients. We are enthusiastic about delivering measurable results to our clients. We believe in building a long-lasting bonding with our partners.
                    Star IT is a one-stop solution for all kinds of web solutions. We provide reliable and cost-effective services to small enterprises and large corporations. Overall we ensure results and outcomes that will generate you more profit.</p>
                   </div>
                </Col>
            </Row>
                </div>
            </div>
        </div>
    );
};

export default StarIt;