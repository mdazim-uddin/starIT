import React from 'react';
import { Col } from 'react-bootstrap';

const WorkProces = (props) => {
const {icon , title, span} = props.pass ;
    return (
        // <div style={{ backgroundImage: `url(${header})`}} className="a">
            <Col md={3}>
               <div  className="work">
                <div className="work-process-icon">
                    <span>{icon}</span>
                </div>
                <div className="work-proces-text">
                    <p>{span}</p>
                    <h4>{title}</h4>
                    
                </div>
            </div>
            </Col>
           
    );
};

export default WorkProces;