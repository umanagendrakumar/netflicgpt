import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector(state => state.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id} = mainMovie;

  return (
    <div className="w-screen -mt-14 relative"> 
    
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground id={id} />
    </div>
  )
}

export default MainContainer;