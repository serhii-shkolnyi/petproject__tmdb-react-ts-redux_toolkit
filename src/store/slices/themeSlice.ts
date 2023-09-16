import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    themeSwitch: localStorage.getItem("theme") || "theme-light"
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        changeTheme: state => {
            switch (state.themeSwitch) {
                case "theme-light":
                    state.themeSwitch = "theme-dark";
                    localStorage.setItem("theme", "theme-dark");
                    break;
                case "theme-dark":
                    state.themeSwitch = "theme-light";
                    localStorage.setItem("theme", "theme-light");
                    break;
            }
        },

    }
});

const {reducer: themeReducer, actions: themeActions} = themeSlice;

export {
    themeActions,
    themeReducer
};
