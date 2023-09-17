import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IMovieResponse} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movie: IMovie[];
    page: number;
    total_pages: number;
}

const initialState: IState = {
    movie: [],
    page: 0,
    total_pages: 0,
};

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

const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(moviesNowPlaying.fulfilled, (state, action) => {
                state.movie = action.payload.results;
                state.page = action.payload.page;
                state.total_pages = action.payload.total_pages;
            }),

});

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    moviesNowPlaying,
};

export {
    movieActions,
    movieReducer
};