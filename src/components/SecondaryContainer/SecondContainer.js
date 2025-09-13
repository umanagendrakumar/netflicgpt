import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className='w-screen bg-black'>
      <div className='pl-5 lg:-mt-20 relative'>
        <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
        <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
        <MovieList title="Popular" movies={movies?.popularMovies} />
      </div>
    </div>
  )
}

export default SecondContainer;