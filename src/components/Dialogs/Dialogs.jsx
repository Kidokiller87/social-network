import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                   <NavLink to="/dialogs/1"> Valdemar </ NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2"> Andrey </ NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3"> Sveta </ NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4"> Sanya </ NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5"> Viktar </ NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6"> Max </ NavLink>
                </div>
            </div>
                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>How are yoy</div>
                    <div className={s.message}>Superpupper</div>
                </div>
            </div>


    )
}

export default Dialogs;