import React from 'react';


const Navbar = () => {
    return (
        <nav>
            <div className="navbar-container">
                <div className="logo"></div>
                <div className="nav-buttons">
                    <button className='contact'>Contact Us</button>
                    <button className='signup'>Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;