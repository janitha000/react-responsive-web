import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Button from './Button';

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const showButton = () => {
        window.innerWidth <= 960 ? setButton(false) : setButton(true)
    }

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return () => {
            window.removeEventListener('resize', showButton)
        }
    }, []);



    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <div className="navbar-container">
                        <Link to='/' className="navbar-logo">
                            <MdFingerprint className="navbar-icon" />
                        JANITHA
                    </Link>
                        <div className="menu-icon" onClick={() => setClick(!click)}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"} >
                            <li className="nav-item">
                                <Link to='/' className="nav-links">
                                    Home
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/services' className="nav-links">
                                    Services
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/products' className="nav-links">
                                    Products
                            </Link>
                            </li>
                            <li className='nav-btn'>
                                {button ? (
                                    <Link to='/sign-up' className='btn-link'>
                                        <Button buttonStyle='btn--outline'>SIGN UP</Button>
                                    </Link>
                                ) : (
                                        <Link to='/sign-up' className='btn-link'>
                                            <Button
                                                buttonStyle='btn--outline'
                                                buttonSize='btn--mobile'
                                            >
                                                SIGN UP
                                        </Button>
                                        </Link>
                                    )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default NavBar
