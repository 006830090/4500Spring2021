import React from 'react';
import {Link} from "react-router-dom"

const DisplayBox = props => {

    const { item } = props;

    return ( 
        <div className="card" key="{item.id}">

        <div className="card_img">
            <img src={item.display}/>
        </div>

        <div className="card_header">
            <h2>{item.title}</h2>
            <p>{item.availability}</p>
            <Link to={`/categories/${item._id}`}><button className="viewBtn">View</button></Link>
        </div>

    </div>
     );
}
 
export default DisplayBox;