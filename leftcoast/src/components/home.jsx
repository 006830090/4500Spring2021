import React, { Component } from 'react';
import Carouseled from './common/carousel';
import Featured from './common/featured';
import Banner from './common/banner';
import SideNav from './common/sideNav';
import SiteFeatures from './common/siteFeatures';
import './style/homeStyle.css';



class Home extends Component {

    

    render() { 
        return (
            <React.Fragment>
                <div class="flexbox-container">
                    <div><SideNav /></div>
                    <div><Carouseled /></div>   
                </div>       
                <Featured />
                <Banner title="On Sale" />
                <SiteFeatures />
            </React.Fragment>
        );
    }
}
 
export default Home;