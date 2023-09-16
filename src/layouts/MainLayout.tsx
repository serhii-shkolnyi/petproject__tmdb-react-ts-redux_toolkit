import React, {FC} from 'react';

import css from "./MainLayout.module.css";
import {Footer, Header, Main} from "../components";
import {useAppSelector} from "../hooks";

const MainLayout: FC = () => {
    const {themeSwitch} = useAppSelector(state => state.theme);

    return (
        <div className={`${themeSwitch} ${css.wrapper}`}>

            <header className={css.header}>
                <Header/>
            </header>

            <main className={css.main}>
                <Main/>
            </main>

            <footer>
                <Footer/>
            </footer>

        </div>
    );
};

export {
    MainLayout
};
