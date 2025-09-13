import GeminiResultSpace from './GeminiResultSpace';
import GeminiSearchBar from './GeminiSearchBar';
import { useSelector } from 'react-redux';
import lang from '../../utils/langConstants';


const GeminiSearch = () => {
  const code = useSelector((store) => store.preferences.lang);

  return (
    <div className='bg-black'>
      <div className='w-screen pt-24 text-white'>
        <h1 className='text-xl sm:text-2xl font-bold text-center mb-4'>{lang[code].welcome}</h1>
        <GeminiSearchBar code={code}/>
        <GeminiResultSpace />
      </div>
    </div>
  )
}

export default GeminiSearch;