import React from 'react';
import Satisfy from "../images/satisfaction.png";
import Ship from "../images/shipping.png";
import Returns from "../images/returns.png";
import Thirty from "../images/30day.png";
import '../style/homeStyle.css';

const Features = () => {
    return ( 
        <div className="container">
            <div className="row website-features">            
                <div className="col feature-box">
                    <img src={Satisfy}/>
                    <div className="feature-text">
                        <p><b>100% Satisfaction Guarantee</b> <br/> We Pride Ourselves In Customer Satisfaction</p>
                    </div>
                </div>
                
                <div className="col feature-box">
                    <img src={Ship}/>
                    <div className="feature-text">
                        <p><b>Free Shipping</b> <br/> On Every Order Over $100</p>
                    </div>
                </div>

                <div className="col feature-box">
                    <img src={Returns}/>
                    <div className="feature-text">
                        <p><b>Free Returns</b> <br/> On Qualified Items Withtin 30 Days</p>
                    </div>
                </div>

                <div className="col feature-box">
                    <img src={Thirty}/>
                    <div className="feature-text">
                        <p><b>30 Day Financing</b> <br/> Available On Qualified Accounts</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Features;