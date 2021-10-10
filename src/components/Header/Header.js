import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, googleSignOut } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {!user ?
                    <NavLink to="/login">Login</NavLink>
                    : <NavLink to="/review" ><button onClick={googleSignOut}>Logout</button></NavLink>}

            </nav>
            <p>{user?.displayName}</p>
        </div>
    );
};

export default Header;