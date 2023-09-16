import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IAccount} from "../../interfaces";
import {accountService} from "../../services";

const initialState: IAccount = {
    id: 0,
    name: '',
    iso_3166_1: '',
    avatar: {
        tmdb: {
            avatar_path: ''
        }
    }
};

const getAll = createAsyncThunk<IAccount, void>(
    'accountSlice/getAll', async (_, {rejectWithValue} )=>{
        try {
            const {data} = await accountService.getAll();
            return data;
        } catch (e){
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)

const accountSlice = createSlice({
    name: 'accountSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.name = action.payload.name;
            state.id = action.payload.id;
            state.iso_3166_1 = action.payload.iso_3166_1;
            state.avatar.tmdb.avatar_path = action.payload.avatar.tmdb.avatar_path;
        })
});

const {reducer: accountReducer, actions} = accountSlice;

const accountActions = {
    ...actions,
    getAll,

}
export {
    accountActions,
    accountReducer
};
