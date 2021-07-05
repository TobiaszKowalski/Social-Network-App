import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../Navbar/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className = {style.nav}>
            <div className ={`${style.item} ${style.active}`}>
                <NavLink to = '/profile' activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className = {style.item}>
                <NavLink to = '/dialogs' activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className = {style.item}>
                <NavLink to = '/users' activeClassName={style.active}>Users</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;