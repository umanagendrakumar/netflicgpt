import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS, MOVIES_FETCH_URL } from "../utils/constants";
import { addTopRatedMovies } from '../utils/store/movieSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);

    const getTopRatedMoviesData = async () => {
        const data = await fetch(MOVIES_FETCH_URL + 'top_rated', API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addTopRatedMovies(jsonData?.results));
    }

    useEffect(() => {
        !topRatedMovies && getTopRatedMoviesData();
    }, []);
}

export default useTopRatedMovies;