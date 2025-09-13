import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/store/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";
import { useEffect } from "react";
import { TbCloudSearch } from "react-icons/tb";
import { IoHome } from "react-icons/io5";
import { reset, toggleSearchPage } from "../utils/store/preferenceSlice";
import LangDropdown from "./LangDropdown";
import lang from "../utils/langConstants";
import { MdOutlineFollowTheSigns } from "react-icons/md";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const isSearchPage = useSelector((store) => store.preferences.isSearchPage);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => { })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
    dispatch(reset());
  }

  const togglePage = () => {
    dispatch(toggleSearchPage());
  }

  const code = useSelector((store) => store.preferences.lang);

  return (
    <header className='absolute z-10 w-full flex justify-between items-center'>

      <div className='sm:ml-20 w-30 sm:w-40 h-14 sm:h-20'>
        <img src={NETFLIX_LOGO}
          alt="Netflix Logo"
          className="w-full h-full"
        />
      </div>

      <div className="flex items-center justify-center gap-3 text-white">
        {
          isSearchPage && <div><LangDropdown /></div>
        }
        {
          user && (
            <div className="flex gap-3">
              <button onClick={togglePage} className="text-xl sm:text-3xl">
                {
                  isSearchPage ? <IoHome /> : <TbCloudSearch title="Gemini Search" />
                }
              </button>

              <button className='mr-3 sm:mr-20 cursor-pointer text-xl sm:text-3xl' onClick={handleSignOut}>
                <MdOutlineFollowTheSigns title="SignOut"/> 
              </button>
            </div>
          )
        }

      </div>
    </header>
  );
}

export default Header