import React, {FC, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import css from './MovieDetailsPage.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";



import {movieActions} from "../../store";
import {imageURL} from "../../configs";
import {Cast} from "../../components/Cast/Cast";

const MovieDetailsPage: FC = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {mov, credits} = useAppSelector(state => state.movie);

    useEffect(() => {
        dispatch(movieActions.getDetails({id}));
        dispatch(movieActions.getCredits({id}));
    }, [dispatch, id]);

    const linkBack = () => {
        navigate(-1)
    };

    return (
        <div className={"container"}>
            <div className={css.backdrop}>
                <button className={css.back} onClick={linkBack}>back</button>
                <img src={`${imageURL}${mov?.backdrop_path}`} alt={mov?.title}/>
                <div className={css.title}>{mov?.title}</div>
            </div>

            <div className={css.container}>
                <div className={css.flex}>
                    <div className={css.poster}>
                        <img src={`${imageURL}${mov?.poster_path}`} alt={mov?.title}/>
                    </div>
                    <div>
                        <div className={`${css.releaseDate} ${css.flexInfo}`}>
                            <div className={css.bold}>release:</div>
                            {mov?.release_date.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}
                        </div>
                        <div className={css.flexInfo}>
                            <div className={css.bold}>runtime:</div>
                            {mov?.runtime} min
                        </div>
                        <div className={css.flexInfo}>
                            <div className={css.bold}>budget:</div>
                            {mov?.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} $
                        </div>
                        <div className={css.flexInfo}>
                            <div className={css.bold}>revenue:</div>
                            {mov?.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} $
                        </div>
                    </div>
                </div>
                <div className={css.overview}>
                    <p>Overview:</p>
                    <div>{mov?.overview}</div>
                </div>
                <div>
                    <div className={css.castTitle}>
                        <p>Cast list:</p>
                    </div>
                    {credits &&
                        <div className={css.cast}>{credits.map(cast => <Cast key={cast.id} cast={cast}/>)}</div>
                    }
                </div>
            </div>
        </div>
    );
};

export {MovieDetailsPage};