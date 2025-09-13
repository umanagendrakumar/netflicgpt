import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
             state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addGeminiMovieResults: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
});

export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addGeminiMovieResults } = movieSlice.actions;
export default movieSlice.reducer;