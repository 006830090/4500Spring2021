import React from 'react';
import '../style/homeStyle.css';

const Banner = (props) => {
    console.log({props})
  
    return ( 
        <div className="container titleBox">
            <h2>{props.title}</h2>   
        </div>
     );
}
 
export default Banner;