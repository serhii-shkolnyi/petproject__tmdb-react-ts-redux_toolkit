import React, {FC, PropsWithChildren, useEffect} from 'react';
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings";

import css from "./Movie.module.css";
import {IMovie} from "../../interfaces";
import {imageURL} from "../../configs";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../store";

interface IProps extends PropsWithChildren {
    movie: IMovie;
}
const Movie: FC<IProps> = ({movie}) => {
    const {genres} = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getGenres());
    }, [dispatch]);

    const genreItem: string[] = [];

    for (const genre of genres) {
        for (const genreId of movie.genre_ids) {
            if (genreId === genre.id){
                genreItem.push(` ${genre.name} `)
            }
        }
    }

    return (
        <div className={css.container}>
            <Link to={`/movie/${movie.id}`}>
                <div>
                    <img src={`${imageURL}${movie.poster_path}`} alt={movie.title} title={movie.title}/>
                    <div className={css.star}>
                        <StarRatings rating={movie.vote_average/2} starDimension="15px" starSpacing="3px" starRatedColor={'gold'}/>
                        <div className={css.movieGenreAndYear}>{movie.release_date.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}</div>
                    </div>
                    <div className={css.movieGenreAndYear}>{genreItem.slice(0, 2)}</div>
                    <div className={css.title}>{movie.title}</div>
                    <div className={css.vote}>{movie.vote_average}</div>
                </div>
            </Link>
        </div>
    );
};

export {
    Movie
};
