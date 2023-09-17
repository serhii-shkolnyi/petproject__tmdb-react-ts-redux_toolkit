import React, {FC, useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";

import css from "./MoviesByGenrePage.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../store";
import {Movie} from "../../components";



const MoviesByGenrePage:FC = () => {

    const {id} = useParams();
    const {movie, total_pages} = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();

    const [query, setQuery] = useSearchParams({page: '1'})
    const pageTotal = Number(query.get('page'))

    useEffect(() => {
        dispatch(movieActions.getMoviesByGenre({pageTotal, id}));
        setQuery(prev => ({...prev, page: prev.get('page')}))
    }, [query, dispatch, id]);



    const toPrevPage = () => {
        setQuery(prev => ({...prev, page: Number(prev.get('page')) - 1}))
    };
    const toNextPage = () => {
        setQuery(prev => ({...prev, page: Number(prev.get('page')) + 1}))
    };



    return (
        <div className={"container"}>
            {movie &&
                <div className={css.flex}>
                    {movie.map(movie => <Movie key={movie.id} movie={movie}/>)}
                </div>
            }
            <div className={css.buttonFlex}>
                <button className={css.button} disabled={pageTotal === 1} onClick={toPrevPage}>prev</button>
                <div className={css.pagesBlock}>
                    <div className={css.page}>{pageTotal}</div>
                    of
                    <div className={css.page}>{total_pages}</div>
                </div>
                <button className={css.button} disabled={pageTotal === total_pages - 20} onClick={toNextPage}>next</button>
            </div>
        </div>
    );
};

export {MoviesByGenrePage};
