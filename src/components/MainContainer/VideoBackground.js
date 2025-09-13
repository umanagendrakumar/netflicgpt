import { useSelector } from "react-redux";

const VideoBackground = () => {
  const isTrailerMuted = useSelector(store => store.preferences.isTrailerMuted);
  const muteValue = isTrailerMuted ? "1" : "0";

  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video "
        src={`https://www.youtube.com/embed/bMgfsdYoEEo?autoplay=1&mute=${muteValue}&controls=0&modestbranding=1&rel=0&disablekb=1&loop=1&playlist=bMgfsdYoEEo`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoBackground;