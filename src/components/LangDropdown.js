import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setLanguage } from "../utils/store/preferenceSlice";

const LangDropdown = () => {
  const dispatch = useDispatch();

  const changeLanguage = (e) => {
    dispatch(setLanguage(e.target.value));
  }
  
  return (
    <select className='text-black outline-none p-1 cursor-pointer text-sm sm:text-md'
    onChange={changeLanguage}>
      {
        SUPPORTED_LANGUAGES.map(obj => {
          return <option key={obj.code} value={obj.code}>{obj.name}</option>
        })
      }
    </select>
  )
}

export default LangDropdown;