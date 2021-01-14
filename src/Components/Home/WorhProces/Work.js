import  React, { useState } from 'react';
import WorkProces from './WorkProces';
import {FaBullhorn,FaUserPlus,FaPaintBrush } from "react-icons/fa";
import './Work.css'
import { Row } from 'react-bootstrap';
import header from '../../../image/n.jpg'
const Work = () => {
const [ work , setWork ] = useState([
    {
        id:1,
        icon:<FaBullhorn/>,
        span:'500 +',
        title: 'Website Develop'
    },
    {
        id:2,
        icon:<FaPaintBrush/>,
        span:'90 +',
        title: 'Software'
    },
    {
        id:3,
        span:'20 +',
        icon:<FaUserPlus/>,
        title: 'Apps'
    },
    {
        id:4,
        span:'1200 +',
        icon:<FaPaintBrush/>,
        title: 'Happy Clients'
    },
   
])

    return (

        <div className="work-proces-area">
            <div className="work-text">
                <h3>Our Working Process</h3>
                <p>5 Step Process to how its Works</p>
            </div>
            <div className="work-process">
                <div className="box1">
                    <h4>requirement Gathering</h4>
                </div>
                <div className="box2">
                    <h4>send project scop</h4>
                </div>
                <div className="box3">
                    <h4>development</h4>
                </div>
                <div className="box4">
                    <h4>feedback / change</h4>
                </div>
                <div className="box5">
                    <h4>go live</h4>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${header})`}} className="">
           <Row>
         
           {
            work.map(work => <WorkProces pass={work}></WorkProces>)
            }
           
           </Row>
           </div>
        </div>
    )
}
export default Work;