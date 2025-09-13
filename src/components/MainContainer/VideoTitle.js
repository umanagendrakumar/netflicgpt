import { FaPlay } from "react-icons/fa6";
import { MdInfoOutline } from "react-icons/md";
import { IoIosVolumeOff } from "react-icons/io";
import { IoIosVolumeHigh } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleTrailerMute } from "../../utils/store/preferenceSlice";

const VideoTitle = ({ title, overview }) => {
  const dispatch = useDispatch();
  const isTrailerMuted = useSelector(store => store.preferences.isTrailerMuted);
  const toggleMute = () => {
    dispatch(toggleTrailerMute());
  }

  return (
    <div className='absolute bottom-10 lg:bottom-52 text-gray-200 sm:text-white pl-4 sm:pl-8 md:pl-16'>
      <h1 className='text-sm sm:text-2xl md:text-3xl font-bold mb-1'>{title}</h1>
      <p className='w-[50%] hidden md:inline-block mb-1'>{overview}</p>
      <div className="flex gap-4">
        <button className='px-4 py-2 bg-white text-black font-bold rounded hidden lg:flex items-center gap-1 cursor-not-allowed'><FaPlay className="text-xl" /> Play</button>
        <button className='px-4 py-2 bg-gray-400 text-white font-bold rounded hidden lg:flex items-center gap-1 cursor-not-allowed'><MdInfoOutline className="text-xl" /> More Info</button>
        <button onClick={toggleMute} className="text-xl sm:text-2xl md:text-3xl">
          {
            isTrailerMuted ? <IoIosVolumeOff /> : <IoIosVolumeHigh />
          }
        </button>
      </div>
    </div>
  )
}

export default VideoTitle;