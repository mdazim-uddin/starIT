import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { FaSearchMinus} from "react-icons/fa";
const Slider = () => {
    return (
        <div>
<div className="overlay">
   <div className="search">
      
       <form>
       <input type="text" name="" placeholder="Search..."/>
       <button>
        <input type="submit" name="" value=""></input>
           <FaSearchMinus/>
       </button>
       </form>
   </div>
</div>

<Carousel className="carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.imgur.com/FZ8fxfB.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.imgur.com/v5H8b5M.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.imgur.com/sbsKeRn.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
           
        </div>
    );
};

export default Slider;