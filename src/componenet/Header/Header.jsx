import React from 'react';
import { NavLink } from 'react-router';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>This my headers</h1>
            <nav className='header'>
               
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobail">Mobiles</NavLink>
                <NavLink to="leptops">Leptops</NavLink>
                <NavLink to="Navber">Navber</NavLink>
                <NavLink to="/user">User</NavLink>
                <NavLink to="/users2">Users2</NavLink>
            </nav>
        </div>
    );
};

export default Header;