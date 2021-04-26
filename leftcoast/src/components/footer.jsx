import React from 'react';
import './style/footer.css';
import { Icon } from 'rsuite';

const Footer = () => {
    return ( 
        <footer>
            <div className="footer">
                <div className="row">
                    <div className="footer-left col">
                        <p className="about">
                            <span> About Us</span> 
                            Left Coast Industrial Supply is a Wholesale Supply Warehouse Operating in 
                            Riverside, California. We Specialize in Hand Tools and Shop Supplies for the
                            True Professional Working in Any Industrial Field. 
                        </p>

                        <div class="icons">
                            <Icon className="iconSpace" size={32} icon="facebook-square" />
                            <Icon className="iconSpace" icon="twitter" />
                            <Icon className="iconSpace" icon="linkedin-square" />
                            <Icon className="iconSpace" icon="google-plus-square" />
                            <Icon className="iconSpace" icon="instagram" />
                        </div>
                    </div>

                    <div className="footer-center container col">
                        <div>
                            <i class="fa fa-map-marker"></i>
                            <p><span> 1865 Iowa Avenue Ste B.</span> Riverside, California</p>
                        </div>
                        <div>
                            <i class="fa fa-phone"></i>
                            <p> (951) 781-3739</p>
                        </div>
                        <div>
                            <i class="fa fa-envelope"></i>
                            <p><a href="#">Email Us</a></p>
                        </div>
                    </div>
                    
                    <div className="footer-right col">
                        <h2> Left<span> Coast</span> Industrial</h2>
                        <p class="menu">
                        <a href="#"> Home </a> 
                        <a href="#"> Account </a> 
                        <a href="#"> Contact</a> 
                        </p>
                        <p class="name"> CCS Media &copy; 2021</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;