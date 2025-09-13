import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/store/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS, MOVIES_FETCH_URL } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    const getNowPlayingMoviesData = async () => {
        const data = await fetch(MOVIES_FETCH_URL + 'now_playing', API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addNowPlayingMovies(jsonData?.results));
    }

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMoviesData();
    }, []);
}

export default useNowPlayingMovies;