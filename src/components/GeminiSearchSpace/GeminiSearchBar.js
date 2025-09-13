import { TbWorldSearch } from "react-icons/tb";
import lang from "../../utils/langConstants";
import { useRef } from "react";
import ai from "../../utils/ai";
import { API_OPTIONS } from "../../utils/constants";
import { addGeminiMovieResults } from "../../utils/store/movieSlice";
import { useDispatch } from "react-redux";
import { toggleSearchShimmer } from "../../utils/store/preferenceSlice"

const GeminiSearchBar = ({ code }) => {

  const query = useRef(null);
  const dispatch = useDispatch();

  const searchMovies = async (movieName) => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" + movieName,
        API_OPTIONS
      );
      const json = await res.json();
      return json.results;

    } catch (err) {
      console.log(err);
    }
  };

  const handleGeminiSearch = async () => {
    if (query.current.value !== "") {
      dispatch(toggleSearchShimmer());
    }

    const prompt = "Act as an intelligent movie recommendation system with deep knowledge of cinema; for the query" + query.current.value + ", suggest the 5 most relevant and high-quality movies only as names, comma-separated with no extra text (e.g., RRR, Magadheera, Coolie, Jawaan, Premalu).";
    if (query.current.value !== "") {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-2.0-flash-001',
          contents: prompt,
        });
        const responseArr = response.text.split(", ").map(item => item.trim());

        const promiseArr = responseArr.map(moviename => searchMovies(moviename));
        const results = await Promise.all(promiseArr);

        dispatch(addGeminiMovieResults({ movieNames: responseArr, movieResults: results }));
        dispatch(toggleSearchShimmer());
        
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="mb-4 sm:mb-8 w-screen">
      <form className="flex items-center justify-center"
        onSubmit={e => e.preventDefault()}>
        <input
          ref={query}
          type="text"
          placeholder={lang[code].placeholder}
          className='p-2 px-4 w-[80%] sm:w-[40%] text-black outline-none font-semibold'
        />
        <button className='border sm:border-none text-3xl sm:text-4xl p-1'
          onClick={handleGeminiSearch}><TbWorldSearch /></button>
      </form>
    </div>
  )
}

export default GeminiSearchBar;