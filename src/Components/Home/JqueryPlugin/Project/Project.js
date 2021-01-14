import React from 'react';
import { Col } from 'react-bootstrap';

const Project = (props) => {
const {title,image,span}  =  props.pass
    return (

        <Col md={4}>
            <div className="plugin-img">
            <img src={image} alt="" className="img-fluid"/>
            <div className="plugin-overlay">
                <div className="plugin-overlay-btn">
                <button>more info</button>
                <button>view lerger</button>
                </div>
            </div>
            </div>
            <div className="plugin-title-text">
            <h5>{title}</h5>
            <span>{span}</span>
            </div>
        </Col>
    );
};

export default Project;