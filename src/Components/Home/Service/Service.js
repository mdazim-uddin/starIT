import React from 'react';
import { Col } from 'react-bootstrap';
import './Service.css'
const Service = (props) => {
const {icon,title,description}=props.pd
    return (
        
         <Col md={3}>
             <div className="services">
             <div className="service-icon">
             <span>{icon}</span>
             </div>
        <div className="service-text">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
         </div>  
         </Col>
       
    );
};

export default Service;