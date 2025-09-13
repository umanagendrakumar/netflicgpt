import { NETFLIX_BG } from '../utils/constants';

const Background = () => {
  return (
    <div>
      <img
        src={NETFLIX_BG}
        alt="Background"
        className="brightness-50 scale-125 h-screen object-cover w-full"
      />
    </div>
  )
}

export default Background;