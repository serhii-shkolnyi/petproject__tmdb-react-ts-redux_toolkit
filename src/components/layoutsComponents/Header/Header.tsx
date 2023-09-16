import React, {FC, useEffect} from 'react';
import {Link, NavLink} from "react-router-dom";

import "../../../global.css";
import css from "./Header.module.css";
import logo from "../../../assets/icons/logo.svg";
import moon from "../../../assets/icons/moon.svg";
import sun from "../../../assets/icons/sun.svg";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {accountActions, themeActions} from "../../../store/slices";
import {imageURL} from "../../../configs";

const Header: FC = () => {
    const dispatch = useAppDispatch();

    const {themeSwitch} = useAppSelector(state => state.theme);
    const {name, avatar, iso_3166_1} = useAppSelector(state => state.account);

    useEffect(() => {
        dispatch(accountActions.getAll());
    }, [dispatch, name,iso_3166_1, avatar]);

    return (
        <div className={`container ${css.header_body} ${css.flex}`}>

            <div className={`${css.header_navigate} ${css.flex}`}>
                <div className={css.navigate_logo}>
                    <Link to={"/"}><img src={logo} alt="logo"/></Link>
                </div>

                <nav className={css.navigate_menu}>
                    <ul className={`${css.flex} ${css.menu_list}`}>
                        <li className={css.menu_item}>
                            <NavLink className={css.menu_link} to={"/movies"}>Movies</NavLink>
                        </li>
                        <li className={css.separator}></li>
                        <li className={css.menu_item}>
                            <NavLink className={css.menu_link} to={"/tv-shows"}>TV Shows</NavLink>
                        </li>
                        <li className={css.separator}></li>
                        <li className={css.menu_item}>
                            <NavLink className={css.menu_link} to={"/people"}>People</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={`${css.header_settings} ${css.flex}`}>
                <div onClick={() => dispatch(themeActions.changeTheme())} className={css.settings_themeSwitcher}>
                    {themeSwitch === 'theme-light' ?
                        <div className={`${css.themeSwitcher_item} ${css.flex}`}>
                            <img src={moon} alt="moon"/>
                            <p>dark mode</p>
                        </div>
                        :
                        <div className={`${css.themeSwitcher_item} ${css.flex}`}>
                            <img src={sun} alt="sun"/>
                            <p>light mode</p>
                        </div>
                    }
                </div>

                <div className={css.separator}></div>

                <div className={`${css.settings_account} ${css.flex}`}>
                    <img className={css.account_avatar} src={`${imageURL}${avatar.tmdb.avatar_path}`} alt="avatar"/>
                    <p>{iso_3166_1} {name}</p>
                </div>
            </div>

        </div>
    );
};

export {
    Header
};
