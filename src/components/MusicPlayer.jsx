import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);

  const togglePlay = () => {
    if (!audioRef.current) return;
    playing ? audioRef.current.pause() : audioRef.current.play();
    setPlaying(!playing);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        fixed bottom-6 right-6 z-50
        w-[330px]
        rounded-xl
        bg-black/85 backdrop-blur-xl
        border border-violet-500/40
        px-5 py-4
      "
    >
      <audio ref={audioRef} src="/music/without-me.mp3" />

      {/* ROW */}
      <div className="flex items-center gap-4">
        {/* PLAY */}
        <button
          onClick={togglePlay}
          className="
            w-10 h-10 rounded-full
            bg-violet-500
            flex items-center justify-center
            text-white text-lg
          "
        >
          {playing ? "⏸" : "▶"}
        </button>

        {/* TITLE */}
        <div className="flex-1 leading-tight">
          <p className="text-white font-normal text-base">
            Without Me
          </p>
          <p className="text-gray-400 text-sm">
            Eminem
          </p>
        </div>

        {/* VOLUME */}
        <div className="flex items-center gap-2">
          <span className="text-gray-300 text-sm">🔊</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => {
              setVolume(e.target.value);
              audioRef.current.volume = e.target.value;
            }}
            className="
              w-20 h-1
              accent-violet-500
              cursor-pointer
            "
          />
        </div>

        {/* CLOSE */}
        <button className="text-gray-400 text-lg hover:text-white">
          ✕
        </button>
      </div>

      {/* FOOTNOTE */}
      <p className="mt-2 text-xs text-gray-500">
        Music player – Click play after any interaction
      </p>
    </motion.div>
  );
}