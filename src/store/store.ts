import {configureStore} from "@reduxjs/toolkit";

import {accountReducer, themeReducer} from "./slices";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        account: accountReducer,

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
