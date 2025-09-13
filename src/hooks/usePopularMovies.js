import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS, MOVIES_FETCH_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/store/movieSlice"

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const popularMovies = useSelector(store => store.movies.popularMovies);

    const getPopularMoviesData = async () => {
        const data = await fetch(MOVIES_FETCH_URL + 'popular', API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addPopularMovies(jsonData?.results));
    }

    useEffect(() => {
        !popularMovies && getPopularMoviesData();
    }, []);
}

export default usePopularMovies;