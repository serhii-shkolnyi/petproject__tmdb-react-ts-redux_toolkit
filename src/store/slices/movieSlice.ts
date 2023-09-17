import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {ICast, IGenre, IGenreResponse, IMovie, IMovieCredits, IMovieDetails, IMovieResponse} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movie: IMovie[];
    mov: IMovieDetails | null;
    genres: IGenre[];
    credits: ICast[];
    search: IMovie[];
    page: number;
    total_pages: number;
}

const initialState: IState = {
    movie: [],
    mov: null,
    genres: [],
    credits: [],
    search: [],
    page: 1,
    total_pages: 0,
};

const moviesAll = createAsyncThunk<IMovieResponse, { page: number }>(
    "movieSlice/moviesAll", async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllMovie(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const moviesNowPlaying = createAsyncThunk<IMovieResponse, { page: number }>(
    "movieSlice/moviesNowPlaying", async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMoviesNowPlaying(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);
const movieTopRated = createAsyncThunk<IMovieResponse, { page: number }>(
    "movieSlice/movieTopRated", async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMoviesTopRated(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const movieUpcoming = createAsyncThunk<IMovieResponse, { page: number }>(
    "movieSlice/movieUpcoming", async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMoviesUpComing(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);
const getDetails = createAsyncThunk<IMovieDetails, { id: string | undefined}>(
    'movieSlice/getDetails',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getDetails(id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);
const getCredits = createAsyncThunk<IMovieCredits, { id: string | undefined }>(
    'movieSlice/getCredits',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getCredits(id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);


const getMoviesByGenre = createAsyncThunk<IMovieResponse, { pageTotal: number, id: string | undefined }>(
    'movieSlice/getMoviesByGenre',
    async ({pageTotal, id}, {rejectWithValue, dispatch}) => {
        try {
            const {data} = await movieService.getByGenreId(id, pageTotal);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const getGenres = createAsyncThunk<IGenreResponse, void>(
    'movieSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getGenres();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const getBySearchMovie = createAsyncThunk<IMovieResponse, { search: string }>(
    'movieSlice/getBySearchMovie',
    async ({search}, {rejectWithValue}) => {
        try {
            console.log(search)
            const {data} = await movieService.getBySearchMovie(search);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(moviesAll.fulfilled, (state, action) => {
                state.movie = action.payload.results;
                state.page = action.payload.page;
                state.total_pages = action.payload.total_pages;
            })
            .addCase(movieTopRated.fulfilled, (state, action) => {
                state.movie = action.payload.results;
                state.page = action.payload.page;
                state.total_pages = action.payload.total_pages;
            })
            .addCase(movieUpcoming.fulfilled, (state, action) => {
                state.movie = action.payload.results;
                state.page = action.payload.page;
                state.total_pages = action.payload.total_pages;
            })
            .addCase(moviesNowPlaying.fulfilled, (state, action) => {
                state.movie = action.payload.results;
                state.page = action.payload.page;
                state.total_pages = action.payload.total_pages;
            })
            .addCase(getDetails.fulfilled, (state, action) => {
                state.mov = action.payload;
            })
            .addCase(getCredits.fulfilled, (state, action) => {
                state.credits = action.payload.cast.slice(0, 14);
            })
            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                state.movie = action.payload.results;
                state.page = action.payload.page;
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
            })
            .addCase(getBySearchMovie.fulfilled, (state, action) => {
                state.search = action.payload.results;
                state.page = action.payload.page;
            })


});

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    moviesAll,
    movieTopRated,
    movieUpcoming,
    moviesNowPlaying,
    getMoviesByGenre,
    getDetails,
    getCredits,
    getGenres,
    getBySearchMovie,
};

export {
    movieActions,
    movieReducer
};