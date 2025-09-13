import { MOVIE_IMAGE_PATH } from '../../utils/constants'

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className='flex-shrink-0 w-32'>
      <img className="rounded" src={MOVIE_IMAGE_PATH + poster_path} alt="movie_poster" />
    </div>
  )
}

export default MovieCard;