import React, {FC, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper';
import StarRatings from 'react-star-ratings';

import 'swiper/css';
import 'swiper/css/navigation';
import css from "./CarouselMain.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../store";
import {imageURL} from "../../configs";

const CarouselMain: FC = () => {
    const dispatch = useAppDispatch();
    const {movie, page} = useAppSelector(state => state.movie);

    useEffect(() => {
        dispatch(movieActions.moviesNowPlaying({page}));
    }, [dispatch]);
    console.log(movie, page)
    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            effect="coverflow"
            autoplay
            slidesPerView={1}
            navigation
            loop={true}
            className={css.carousel_body}
        >
            {movie &&
                <div>
                    {movie.map(movie =>
                        <SwiperSlide className={css.slide_flex} style={{
                            backgroundImage: `url(${imageURL}${movie.backdrop_path})`,
                            backgroundSize: "cover"
                        }}>
                            <div className={css.slide_body}>
                                <div className={css.slide_mini}><img src={`${imageURL}${movie.poster_path}`}
                                                                     alt={`${movie.title}`}/></div>
                                <h2>{movie.title}</h2>
                                <div className={css.vote_average}>
                                    IMDB: {movie.vote_average}
                                    <StarRatings rating={movie.vote_average / 2} starDimension="15px"
                                                 starSpacing="3px" starRatedColor={'gold'}/>
                                </div>
                                <p>{movie.overview}</p>
                            </div>


                        </SwiperSlide>
                    )};
                </div>
            }
        </Swiper>
    );
};

export {
    CarouselMain
};

