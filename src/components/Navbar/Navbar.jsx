import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import MMT from '../../Logo/MMTLogo.png';
import Flight from '../../Logo/flight.svg';
import Hotels from '../../Logo/hotels.svg';
import Train from '../../Logo/trn.png';
import SignUp from '../SignUP/SignUp'
import LogOutModal from './LogOutModal';
import { DataParentContext } from '../App';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
    const tempnavi = useNavigate();
    const [closePage, setClosePage] = useState(true);
    const closefun = () => {
        setClosePage(false)
        tempnavi('/')
    }
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    // const localUserName = localStorage.getItem("userName");
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    const [modalBtn, setModalBtn] = useState(false)
    const localContext = useContext(DataParentContext);
    const onOff = () => {
        setModalBtn(true)
        //console.log("alpha")
    }
    useEffect(() => {
        console.log(modalBtn)
    })
    return (
        <div className='NavbarContainer'>
            <div className='burger-menu mainhum'>
                <div className={burger_class} onClick={updateMenu}></div>
                <div className={burger_class} onClick={updateMenu}></div>
                <div className={burger_class} onClick={updateMenu}></div>
            </div>
            <div className={menu_class} id='nav-sub'>
                <ul className='list_items'>
                    <li> <a href='/'>Flight</a></li>
                    <li> <a href='/hotels'>Hotels</a></li>
                    <li><a href='/trains'>Train</a></li>
                    <li><a href='/login'>Login</a></li>
                    <li><a href='/signUp'>Sign Up</a></li>
                </ul>
            </div>
            <div className="logo">
                <Link to="/">
                    <img src={MMT} alt="MMT-Logo" />
                </Link>
            </div>
            <Link className="navlinks navvvvv" to="/"><img id="dd" src={Flight} alt="Flight-logo" />Flights</Link>
            <Link className="navlinks navvvvv" to="/hotels"><img src={Hotels} alt="Hotels-logo" />Hotels</Link>
            <Link className="navlinks navvvvv" to="/trains"><img src={Train} alt="Train-logo" />Trains</Link>
            <div className='DashboardPortal'>
                {localContext.LoginDetails.length > 0 ? <><button className='btn-btn' onClick={() => onOff()}>
                    {"Hi " + localContext.LoginDetails[0].userName}
                </button>
                    {
                        modalBtn && <LogOutModal setModalBtn={setModalBtn} />
                    }
                </> : <Link className="navlinks" to="/login">Log In</Link>}
            </div>
        </div>
    )
}
export default Navbar
