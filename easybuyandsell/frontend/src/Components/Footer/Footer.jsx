import React from 'react';
import './Footer.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import useStyles from './styles';
import Logo from '../../assets/logo.png';
import {NavLink} from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';


const Footer = () => {
    const classes = useStyles();
    return (
        <div className="footer">
            <div className="footer_container">
                <img src={Logo} alt="logo" className="footer_logo"/>

                <ul className="footer_links">
                    <li className="footer_items">
                        <NavLink exact to="/" className="nav_links">
                            Home
                        </NavLink>
                    </li>
                    <li className="footer_items">
                        <NavLink exact to="/buy" className="nav_links">
                            Buy
                        </NavLink>
                    </li>
                    <li className="footer_items">
                        <NavLink exact to="/sell" className="nav_links">
                            Sell
                        </NavLink>
                    </li>
                    <li className="footer_items">
                        <NavLink exact to="/myads" className="nav_links">
                            My Ads
                        </NavLink>
                    </li>
                    <li className="footer_items">
                        <NavLink exact to="/signup" className="nav_links">
                            Sign Up
                        </NavLink>
                    </li>
                </ul>

                <div className="social_links">
                    <h1>Follow Us</h1>
                    <div className="social_items">
                        <a href="https://www.linkedin.com/in/gurashish-gill-6516b41b6" target="_blank">
                             <LinkedInIcon className="icon"/>
                         </a>
                         <a href="https://www.instagram.com/gurashish_gill_18/" target="_blank">
                             <InstagramIcon className="icon"/>
                         </a>
                         <a href="https://github.com/gurashish18/easybuyandsell.com.git" target="_blank">
                             <GitHubIcon className="icon"/>
                         </a>
                    </div>
                </div>
            </div>
            <div className="footer_msg">
                <p>Made with </p>
                <FavoriteIcon />
            </div>
        </div>
    )
}

export default Footer
