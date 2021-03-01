import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src="https://cdn.pixabay.com/photo/2013/07/12/13/56/paper-plane-147602_960_720.png" />
        <div className={s.loginBlock}>
        {props.isAuth
            ? <div><div>{props.login}</div><button onClick={props.logout}>Log out</button> </div>
            : <NavLink to={'/login'}>Login</NavLink>}
    </div>
    </header>
}

export default Header;