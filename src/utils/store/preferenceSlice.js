import { createSlice } from "@reduxjs/toolkit";

const preferenceSlice = createSlice({
    name: "preferences",
    initialState: {
        isTrailerMuted: true,
        isSearchPage: false,
        lang: "en",
        searchShimmer: false,
    },
    reducers: {
        toggleTrailerMute: (state) => {
            state.isTrailerMuted = !state.isTrailerMuted;
        },
        toggleSearchPage: (state) => {
            state.isSearchPage = !state.isSearchPage;
        },
        reset: (state) => {
            state.isTrailerMuted = true;
            state.isSearchPage = false;
            state.lang = "en";
        },
        setLanguage: (state, action) => {
            state.lang = action.payload;
        },
        toggleSearchShimmer: (state) => {
            state.searchShimmer = !state.searchShimmer;
        }
    }
});

export const { toggleTrailerMute, toggleSearchPage, reset, setLanguage, toggleSearchShimmer} = preferenceSlice.actions;
export default preferenceSlice.reducer;