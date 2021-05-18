import React from 'react';
import { getItem } from '../../services/itemService';
import '../style/itemPage.css';
import { Carousel } from 'rsuite';



const DisplayItem = ( { match, history }) => {
    const {id} = match.params;
    const item = getItem(id);
    return ( 
        <React.Fragment>
        <section className="single-product">
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-5 dispImage container">
                    <Carousel autoplay navButtonsAlwaysInvisible={true} className="custom-slider">
                        <img
                        src={item.images}
                        />
                        <img
                        src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2"
                        
                        />
                    </Carousel>
                    </div>

                    <div className="col-md-7">
                        <h2>{item.title}</h2>
                        <p>Stock Number: {item._id}</p>
                        <p><b>Availability:</b> {item.availability}</p>
                        <p><b>Condition:</b> {item.condition}</p>
                        <p><b>Brand:</b> {item.brand}</p>
                        <button className="btn btn-primary" onClick={() => history.push('/categories')}>Save</button>
                    </div>
                </div>
            </div>
        </section>

        <section className="product-description">
            <h1>hi</h1>
        </section>
        
        </React.Fragment>  
    );
}
 
export default DisplayItem;