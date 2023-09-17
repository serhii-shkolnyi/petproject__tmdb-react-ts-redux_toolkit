import {apiService} from "./apiService";
import {IMovieResponse} from "../interfaces";
import {urlsConfig} from "../configs";

const movieService = {
    getMoviesNowPlaying: (page: number) =>
        apiService.get<IMovieResponse>(urlsConfig.movie.nowPlaying, {params: {page}}),

    getMoviesPopular: (page: number) =>
        apiService.get<IMovieResponse>(urlsConfig.movie.popular, {params: {page}}),

    getMoviesTopRated: (page: number) =>
        apiService.get<IMovieResponse>(urlsConfig.movie.topRated, {params: {page}}),

    getMoviesUpComing: (page: number) =>
        apiService.get<IMovieResponse>(urlsConfig.movie.upComing, {params: {page}}),
};

export {
    movieService
};
