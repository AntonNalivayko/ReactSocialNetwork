import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png' /></div>
            <div className={s.textLogo}>Social Network from ReactJS</div>
            <div className={s.authorLogo}>Anton Nalivayko®</div>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login 
                : <NavLink to={'/login'}>LOG IN</NavLink>}
            </div>
            
            
        </header>
    )
}

export default Header;
