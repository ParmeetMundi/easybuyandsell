import React from 'react';
import './Home.css';
import useStyles from './Styles';
import {Button} from '@material-ui/core';
import homebg from '../../assets/homebg.png';
import aboutus from '../../assets/aboutus.png';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from 'react-router-dom';
import Testinomials from '../Testinomials/Testinomials';

const Home = () => {
    const classes = useStyles();
    return( 
    <div className="home">
        <div className="home_container">
            <div className="home_section">
                <div className="home_section_element">
                    <h1>With us Buying and Selling in College is very easy!!!</h1>
                    <p>Join people using EASYBUYANDSELL.COM to painlessly buying and selling products at your college.Buy clicking Buy Now you can see various products available to buy. Buy clicking Sell Now you can easily sell your products by adding some information.</p>

                    <div className="home_section_btn">
                        <Button variant="outlined" className="home_btn" component={Link} to="/buy">Buy Now <ArrowRightAltIcon/></Button>
                        <Button variant="outlined" className="home_btn" component={Link} to="/sell">Sell Now <ArrowRightAltIcon/></Button>
                    </div>
                </div>
                <div className="home_section_element">
                    <img src={homebg} alt="img" className="home_img"/>
                </div>
            </div>
            <hr />
            <div className="home_section2">
                <div className="home_section2_element">
                    <h1>About Us</h1>
                    <img src={aboutus} alt="img" className="about_img"/>
                </div>

                <Testinomials />
            </div>
        </div>
    </div>
    );
}


export default Home;