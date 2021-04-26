import React from 'react';
import '../style/homeStyle.css';
import CMT from "../images/cmt.jpg";
import Bosch from "../images/bosch2.jpg";
import Husqy from "../images/husqy.png";

const Featued = () => {
    return ( 
        <div className="container featured">
            <div className="row">
                <div className="col">
                    <img src={CMT}></img>
                </div>
                <div className="col">
                    <img src={Bosch}></img>
                </div>
                <div className="col">
                    <img src={Husqy}></img>
                </div>
            </div>
        </div>
    );
}
 
export default Featued;