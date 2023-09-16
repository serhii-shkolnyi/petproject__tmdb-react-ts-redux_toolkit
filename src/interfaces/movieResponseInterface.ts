import {IMovie} from "./movieInterface";

export interface IMovieResponse {
    page: number;
    results: IMovie[];
    total_results: number;
    total_pages: number;
}