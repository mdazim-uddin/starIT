import React from 'react';
import { Col,Row } from 'react-bootstrap';
import {FaLeaf,FaFileAlt,FaClock,FaCannabis} from "react-icons/fa";
import './ChooseUs.css'
const ChooseUs = () => {
    return (
        <div className="chooseUs-area">
            <div className="choose-text">
                <h3>Why Choose Us</h3>
                <div className="commonBorder"></div>
                <p>Star IT is committed to making a difference in 
                output to meet our clients’ diverse demands.
                 We endeavor in achieving excellence in our performance.
                  No matter what we promise to deliver results on time. 
                  What sets us apart is Quality and ethics driven performance.
                   And we mean it. We will support you with full assistance and follow-ups. At Star IT you will receive personalized IT solutions at an affordable rate. If need of a software development solution?
                 Call us to know more about our services</p>
            </div>
            <Row>
                <Col md={6}>
                    <div className="choose-icon">
                        <div className="icon-area">
                            <div  className="icon">
                            <FaLeaf/>
                            </div>
                        <h5>Flexible hiring models</h5>
                        </div>
                        <div className="icon-area">
                            <div  className="icon">
                            <FaFileAlt/>
                            </div>
                            <h5>Turn around time</h5>
                        </div>
                        <div className="icon-area">
                            <div  className="icon">
                            <FaClock/>
                            </div>
                            <h5>Strict NDA agreement</h5>
                        </div>
                        <div className="icon-area">
                            <div  className="icon">
                            <FaCannabis/>
                            </div>
                            <h5>Good retention rate with existing customers</h5>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                 <div className="choose-text-midd">
                 <h5>100%</h5>
                   <span>Transparency</span>
                   <h5>200+</h5>
                   <span>Transparency</span>
                 </div>
                </Col>
                <Col md={3}>
                 <div className="choose-text-midd">
                 <h5>100%</h5>
                   <span>Transparency</span>
                   <h5>200+</h5>
                   <span>Transparency</span>
                 </div>
                </Col>
            </Row>
        </div>
    );
};

export default ChooseUs;