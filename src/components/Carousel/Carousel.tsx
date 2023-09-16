import React, {FC, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';

import css from "./Carousel.module.css";
import 'swiper/css';
import 'swiper/css/navigation';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../store";
import {imageURL} from "../../configs";
import {Link} from "react-router-dom";


const Carousel: FC = () => {
    const dispatch = useAppDispatch();
    const {movie, page} = useAppSelector(state => state.movie);

    useEffect(() => {
        dispatch(movieActions.moviesNowPlaying({page}));
    }, [dispatch]);

    return (
        <div className={css.carousel_wrapper}>
            <div className={`container ${css.carousel_title}`}>
                <h2>Now playing</h2>
                <p>See all now playing</p>
            </div>
            <Swiper
                modules={[Navigation]}
                effect="cards"
                spaceBetween={20}
                slidesPerView={5}
                navigation
                loop={true}
                className={`container ${css.carousel_body}`}
            >
                {movie &&
                    <div>
                        {movie.map(movie =>
                            <SwiperSlide className={css.slide}>
                                <div className={css.slide_movie}>
                                    <Link to={''}>
                                        <img src={`${imageURL}${movie.poster_path}`} alt={movie.title} title={movie.title}/>
                                    </Link>
                                </div>


                            </SwiperSlide>
                        )};
                    </div>
                }

            </Swiper>
        </div>
    );
};

export {
    Carousel
};
