import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import css from "./MovieNowPlayingPage.module.css";
import {Movies} from "../../components";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../store";


const MovieNowPlayingPage: FC = () => {
    const dispatch = useAppDispatch();
    const {movie, total_pages} = useAppSelector(state => state.movie);

    console.log(total_pages)
    const [query, setQuery] = useSearchParams({page: '1'})
    const page = Number(query.get('page'))

    const toPrevPage = () => {
        setQuery(prev => ({...prev, page: Number(prev.get('page')) - 1}))
    };
    const toNextPage = () => {
        setQuery(prev => ({...prev, page: Number(prev.get('page')) + 1}))
    };

    useEffect(() => {
        dispatch(movieActions.moviesNowPlaying({page}));
        setQuery(prev => ({...prev, page: prev.get('page')}))
    }, [dispatch, query]);

    return (
        <div>
            <Movies data={movie}/>
            <div className={css.EpisodePagination}>
                <button disabled={page === 1} onClick={toPrevPage}>prev</button>
                <button disabled={page === total_pages - 20} onClick={toNextPage}>next</button>
            </div>

        </div>
    );
};

export {
    MovieNowPlayingPage
};
