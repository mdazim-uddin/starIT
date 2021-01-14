import React, { useState } from 'react';
import ServiceData from '../../ServiceData/ServiceData';
import Service from './Service/Service';
import Slider from './Slider';
import {Row} from 'react-bootstrap'
import StarIt from './StarIt';
import ChooseUs from './ChooseUs/ChooseUs';
import JqueryPlugin from './JqueryPlugin/JqueryPlugin';
import Work from './WorhProces/Work';
const Home = () => {
const [service , setService] = useState(ServiceData)
    return (
        <div>
             <Slider/>
            <div className="service-area">
            <h2>What it Service we provide</h2>
             <Row>
             {
             service.map(product => <Service pd={product}></Service>)    
             }
             </Row>
            </div>
            <StarIt/>
            <ChooseUs/>
            <JqueryPlugin/>
            <Work></Work>
        </div>
    );
};

export default Home;