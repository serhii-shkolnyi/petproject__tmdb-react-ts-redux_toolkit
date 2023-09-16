import {configureStore} from "@reduxjs/toolkit";

import {accountReducer, movieReducer, themeReducer} from "./slices";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        account: accountReducer,
        movie: movieReducer,

    }
});

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}

export {
    store
};
