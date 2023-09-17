import React, {FC, useEffect} from 'react';

import {Carousel, CarouselMain} from "../../components";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../store";

const HomePage: FC = () => {
    const dispatch = useAppDispatch();
    const {movie, page} = useAppSelector(state => state.movie);

    useEffect(() => {
        dispatch(movieActions.moviesNowPlaying({page}));
    }, [dispatch]);

    return (
        <div>
            <CarouselMain/>

            <Carousel data={movie} title={'Now playing'}/>
            <Carousel data={movie} title={'fgfgfgfgfgfgfg'}/>
            <Carousel data={movie} title={'rrrrrrrrrrrrrrr'}/>
        </div>
    );
};

export {
    HomePage
};
