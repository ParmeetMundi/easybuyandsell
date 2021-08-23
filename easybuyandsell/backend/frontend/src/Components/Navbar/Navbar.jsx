import React,{useContext, useState, useEffect} from 'react';
import './Navbar.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Logo from '../../assets/logo.png';
import {NavLink} from 'react-router-dom';
import {AuthContext} from '../Firebase/currentUser';
import {auth} from '../Firebase/firebase'



const Navbar = () => {
    useEffect(() => {
    }, [auth.currentUser])
    const {currentUser} = useContext(AuthContext);
    const{setmyProducts} = useContext(AuthContext) 
    //console.log("USER->>>>", currentUser)
    const[click, setclick] = useState(false);
    const [disable, setdisable] = useState(false)

    const handleClick = () => {
        setdisable(false)
        setclick(!click);
    }
    
    const logout=()=>{
        setmyProducts([])
        auth.signOut()
    }

    const noAccess=(event)=>{
        event.preventDefault()
        setdisable(true)
        alert("You are not login")
    }

    return (
        <nav className="navbar">
            <div className="nav_container">
                <NavLink exact to="/" className="nav_logo">
                    <img src={Logo} alt="logo"/>
                </NavLink>

                <ul className={click ? "nav_menu active" : "nav_menu"}>
                    <li className="nav_item">
                        <NavLink exact to="/" activeClassName="active" className="nav_links" onClick={handleClick}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav_item">
                        <NavLink exact to="/buy" activeClassName="active" className="nav_links" onClick={handleClick}>
                            Buy
                        </NavLink>
                    </li>
                    <li className="nav_item">
                        <NavLink exact to="/sell" activeClassName="active" className="nav_links" disabled={disable} onClick={(e)=>{currentUser? handleClick() : noAccess(e)}}>
                            Sell
                        </NavLink>
                    </li>
                    <li className="nav_item" >
                        <NavLink exact to="/myads" activeClassName="active" className="nav_links" disabled={disable} onClick={(e)=>{currentUser? handleClick() : noAccess(e)}}>
                            My Ads
                        </NavLink>
                    </li>
                    {
                        !currentUser ?
                        <> 
                            <li className="nav_item">
                                <NavLink exact to="/login" activeClassName="active" className="nav_links" onClick={handleClick}>
                                    Login
                                </NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink exact to="/signup" activeClassName="active" className="nav_links" onClick={handleClick}>
                                    Signup
                                </NavLink>
                            </li>
                        </>
                                    :
                        <>
                            <li className="nav_item">
                                <div activeClassName="active" className="nav_links" onClick={logout}>
                                    Logout
                                </div>
                            </li>
                            <li className="nav_item">
                                <div activeClassName="active" className="nav_links">
                                    {currentUser?.displayName}
                                </div>
                            </li>
                        </>
                    }
                </ul>

                <div className="nav_icon" onClick={handleClick}>
                    {
                        click ? <CloseIcon className="icon"/> : <MenuIcon className="icon"/>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
