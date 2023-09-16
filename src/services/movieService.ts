import {apiService} from "./apiService";
import {IMovieResponse} from "../interfaces";
import {urlsConfig} from "../configs";

const movieService = {
    getMoviesNowPlaying: (page: number) =>
        apiService.get<IMovieResponse>(urlsConfig.movie.moviesNowPlaying, {params: {page}}),

};

export {
    movieService
};
