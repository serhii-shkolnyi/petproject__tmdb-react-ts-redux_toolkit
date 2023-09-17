import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import {movieActions} from "../../store";
import css from "../MovieNowPlayingPage/MovieNowPlayingPage.module.css";
import {Movies} from "../../components";

const MovieUpcomingPage = () => {
    const dispatch = useAppDispatch();
    const {movie, total_pages} = useAppSelector(state => state.movie);

    const [query, setQuery] = useSearchParams({page: '1'})
    const page = Number(query.get('page'))

    const toPrevPage = () => {
        setQuery(prev => ({...prev, page: Number(prev.get('page')) - 1}))
    };
    const toNextPage = () => {
        setQuery(prev => ({...prev, page: Number(prev.get('page')) + 1}))
    };

    useEffect(() => {
        dispatch(movieActions.movieUpcoming({page}));
        setQuery(prev => ({...prev, page: prev.get('page')}))
    }, [dispatch, query]);

    return (
        <div>
            <Movies data={movie}/>

            <div className={css.buttonFlex}>
                <button className={css.button} disabled={page === 1} onClick={toPrevPage}>prev</button>
                <div className={css.pagesBlock}>
                    <div className={css.page}>{page}</div>
                    of
                    <div className={css.page}>{total_pages}</div>
                </div>
                <button className={css.button} disabled={page === total_pages - 20} onClick={toNextPage}>next</button>
            </div>
        </div>
    );
};

export {
    MovieUpcomingPage
};
