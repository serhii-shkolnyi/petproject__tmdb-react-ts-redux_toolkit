import {apiService} from "./apiService";
import {IGenreResponse, IMovieCredits, IMovieDetails, IMovieResponse} from "../interfaces";
import {urlsConfig} from "../configs";

const movieService = {
    getAllMovie: (page: number) =>
        apiService.get<IMovieResponse>(urlsConfig.movie.allMovie, {params: {page}}),

    getMoviesNowPlaying: (page: number) =>
        apiService.get<IMovieResponse>(urlsConfig.movie.nowPlaying, {params: {page}}),

    getMoviesPopular: (page: number) =>
        apiService.get<IMovieResponse>(urlsConfig.movie.popular, {params: {page}}),

    getMoviesTopRated: (page: number) =>
        apiService.get<IMovieResponse>(urlsConfig.movie.topRated, {params: {page}}),

    getMoviesUpComing: (page: number) =>
        apiService.get<IMovieResponse>(urlsConfig.movie.upComing, {params: {page}}),


    getGenres: () =>
        apiService.get<IGenreResponse>(urlsConfig.movie.genres),

    getByGenreId: (id: string | undefined, page: number) =>
        apiService.get<IMovieResponse>(urlsConfig.movie.allMovie, {params: {with_genres: id, page}}),

    getBySearchMovie: (query: string) =>
        apiService.get<IMovieResponse>(urlsConfig.movie.searchMovie, {params: {query}}),
    getDetails: (id: string | undefined) =>
        apiService.get<IMovieDetails>(urlsConfig.movie.movieDetails(id)),

    getCredits: (id: string | undefined) =>
        apiService.get<IMovieCredits>(urlsConfig.movie.credits(id)),
};

export {
    movieService
};
