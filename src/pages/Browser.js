import { useSelector } from 'react-redux';
import Header from '../components/Header';
import MainContainer from '../components/MainContainer/MainContainer';
import SecondContainer from '../components/SecondaryContainer/SecondContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import GeminiSearch from '../components/GeminiSearchSpace/GeminiSearch';


const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  const isSearchPage = useSelector((store) => store.preferences.isSearchPage);

  return (
    <>
      <Header />
      <main className='relative flex flex-col justify-center items-center w-full'>
        {isSearchPage ? <GeminiSearch /> : <><MainContainer /><SecondContainer /></>}
      </main>
    </>
  )
}

export default Browser;