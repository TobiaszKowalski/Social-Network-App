import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../Header/Header.module.css';

const Header = (props) => {
    return (
        <header className = {style.header}>
            <img src='https://www.freelogodesign.org/file/app/client/thumb/e7de4650-fe86-4627-8cc3-7efd9b82bd16_200x200.png?1608498095020'  alt="" />
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