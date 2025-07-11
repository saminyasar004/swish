import { Play } from "lucide-react";
import { useRef, useState } from "react";

const CustomVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden shadow-md">
      {/* Video */}
      <video
        ref={videoRef}
        src="/video-placeholder.mp4" // Replace with your actual video path
        className="w-full h-auto rounded-lg"
        controls={isPlaying} // Show controls only after playing
      >
        Your browser does not support the video tag.
      </video>

      {/* Play Button */}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition duration-300"
          aria-label="Play video"
        >
          <Play />
        </button>
      )}
    </div>
  );
};

export default CustomVideoPlayer;
