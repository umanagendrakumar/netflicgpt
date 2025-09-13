import { useSelector } from 'react-redux';
import MovieList from '../SecondaryContainer/MovieList';
import Shimmer from '../Shimmer/Shimmer';

const GeminiResultSpace = () => {
  const {movieNames, movieResults} = useSelector(store => store.movies);
  const isShimmer = useSelector(store => store.preferences.searchShimmer);
  if(isShimmer) return <Shimmer />;
  if(!movieNames) return;

  return (
    <div className='p-4 sm:ml-4'>
      {movieNames.map((movieName, index) => {
        return <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>
      })}
    </div>
  )
}

export default GeminiResultSpace;