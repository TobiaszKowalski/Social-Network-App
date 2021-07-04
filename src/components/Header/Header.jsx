import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../Header/Header.module.css';

const Header = (props) => {
    return (
        <header className = {style.header}>
            <img src=''  alt='logo' />
            <div className={style.loginBlock}>
                {
                    props.isAuth 
                    ? <div>{props.login} <button onClick = {props.logoutThunkCreator}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
};

export default Header;