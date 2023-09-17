import React, {FC, useEffect, useState} from 'react';
import Dropdown, {Option} from 'react-dropdown';
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";

import "../../global.css";
import 'react-dropdown/style.css';
import css from "./MovieLayout.module.css"
import {ReactComponent as Search} from "../../assets/icons/search.svg";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../store";
import {CarouselMain} from "../../components";

interface ISearch {
    search: string;
}

const MovieLayout: FC = () => {
    const {genres} = useAppSelector(state => state.movie);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {register, handleSubmit, reset} = useForm<ISearch>();
    const {movie} = useAppSelector(state => state.movie);

    console.log(genres)
    const onSubmit: SubmitHandler<ISearch> = (search) => {
        if (search.search !== '') {
            setSearch(search.search);
            reset();
        }
    }
    useEffect(() => {
        if (search !== '') {
            dispatch(movieActions.getBySearchMovie({search}));
            navigate('/movie/search');
        }
        dispatch(movieActions.getGenres())
        dispatch(movieActions.moviesNowPlaying({page:1}));
    }, [search, dispatch, navigate]);

    const linkGenre = useNavigate()

    const genresList = genres.map(value => value.name);


    const linkGenres = (option: Option) => {
        genres.forEach(value => {
            if (value.name === option.label) {
                linkGenre(`/movie/genre/${value.id}`)
            }
        })
    }

    return (
        <div className={css.container}>
            <CarouselMain movie={movie}/>

            <div className={css.flex}>
                <div className={css.menu}>
                    <NavLink to={'all'}>All</NavLink>
                    <div className={css.leftMenuUnderline}></div>
                    <NavLink to={'now'}>Now</NavLink>
                    <div className={css.leftMenuUnderline}></div>
                    <NavLink to={'upcoming'}>Upcoming</NavLink>
                    <div className={css.leftMenuUnderline}></div>
                    <NavLink to={'top-rated'}>Top Rated</NavLink>
                </div>
                <div>
                    <Dropdown className={'Dropdown-root'} controlClassName={'Dropdown-control'}
                              placeholderClassName={'Dropdown-placeholder'} menuClassName={'Dropdown-menu'}
                              options={genresList} onChange={linkGenres} placeholder="Genres"/>
                </div>
                <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                    <input className={css.inputSearch} type="text"
                           placeholder="Search your interesting . . . " {...register('search')}/>
                    <Search className={css.search}/>
                </form>
            </div>
            <Outlet/>

        </div>
    );
};

export {
    MovieLayout
};
