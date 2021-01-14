import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import fakeData from '../../fakeData';

import './JqueryPlugin.css'
import Project from './Project/Project';
const JqueryPlugin = () => {
const [category,setCategory]=useState("All")
let filteredCatagory=fakeData.filter(food=>{
    return food.category === category
})
    return (
        <div className="plugin-area">
          <div className="plugin-text">
                <h1>Featured Project</h1>
              </div>
            <div className="plugin-buttons">
                <button onClick={()=>setCategory("All")}>All</button>
                <button onClick={()=>setCategory("Android Apss")}>Android Apps</button>
                <button>Apple Apps</button>
                <button onClick={()=>setCategory("PHP")}>PHP</button>
                <button onClick={()=>setCategory("Wordpress")}>Wordpress</button>
            </div>
            <div className="plugin">
             <Row>
             {
              filteredCatagory.map(item=> <Project pass={item}></Project>)
              }
             </Row>
            </div>
        </div>
    );
};

export default JqueryPlugin;
