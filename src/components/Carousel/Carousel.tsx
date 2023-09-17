import React, {FC, PropsWithChildren} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';

import css from "./Carousel.module.css";
import 'swiper/css';
import 'swiper/css/navigation';

import {imageURL} from "../../configs";
import {Link} from "react-router-dom";
import {IMovie} from "../../interfaces";

interface IProps extends PropsWithChildren {
    data: IMovie[];
    title: string;
}

const Carousel: FC<IProps> = ({data,title}) => {


    return (
        <div className={css.carousel_wrapper}>
            <div className={`container ${css.carousel_title}`}>
                <h2>{title}</h2>
                <p>{`See all ${title}`}</p>
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
                {data &&
                    <div>
                        {data.map(movie =>
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
