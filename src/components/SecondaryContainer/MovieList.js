import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
  if (!movies) return;

  return (
    <div className='mb-6'>
      <h1 className='text-2xl font-semibold text-white mb-2'>{title}</h1>
      <div className='flex gap-2 overflow-x-scroll scrollbar-hide '>
        {movies.map(movie => {
          return <MovieCard key={movie.id} poster_path={movie.poster_path} />
        })}
      </div>
    </div>
  )
}

export default MovieList;