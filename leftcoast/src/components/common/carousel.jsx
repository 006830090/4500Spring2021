
import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../images/intro_image_1.jpg';
import image2 from '../images/intro_image_2.jpg';
import image3 from '../images/intro_image_3.jpg';


const Carouseled = () => {
    const [index, setIndex] = useState(0);

    const mainStyle = {
        width: '100%',
        marginLeft: '20%',
        marginTop: '10px',
        padding: '0 10px',
        display: 'inline-block',
        float: 'right'
      };

      

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return ( 
        <Carousel activeIndex={index} style={mainStyle} onSelect={handleSelect} controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
  
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
        
        </Carousel.Item>
        
      </Carousel>
    );
}
 
export default Carouseled;