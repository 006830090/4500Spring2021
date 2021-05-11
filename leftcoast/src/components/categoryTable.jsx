import React, { Component, useState, useEffect } from 'react';
import items from '../services/itemService';
import DisplayBox from './common/displayBox';


class CategoryTable extends Component {
    state = {  }
    render() {
        const  {data} = this.props;
        
        return ( 
            <div className="container">
            <div className="main_content">
                
                {data.map( item => ( 
                <DisplayBox item={item} />           
    
                ))}
            </div> 
            </div>
         );
    }
}
 
export default CategoryTable;