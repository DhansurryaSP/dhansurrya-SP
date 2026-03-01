import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  const [open, setOpen] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.6);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      {/* AUDIO */}
      <audio ref={audioRef} src="/music/without-me.mp3" loop />

      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="
        fixed bottom-6 right-6 z-50
        w-[330px]
        rounded-xl
        bg-black/85 backdrop-blur-xl
        border border-violet-500/40
        px-5 py-4  
              "
            >
              <div className="flex items-center gap-4">
                {/* PLAY */}
                <button
                  onClick={togglePlay}
                  className="
                    w-10 h-10 rounded-full
                    bg-violet-500
                    flex items-center justify-center
                    text-white text-xl
                    hover:bg-violet-600 transition
                  "
                >
                  {playing ? "⏸" : "▶"}
                </button>

                {/* TEXT */}
                <div className="flex-1 leading-tight">
                  <p className="text-white font-normal text-sm">
                    Without Me
                  </p>
                  <p className="text-gray-400 text-sm">Eminem</p>

                  {/* <p className="text-gray-500 text-sm mt-2">
                    Music player – Click play after any interaction
                  </p> */}
                </div>

                {/* VOLUME */}
                <div className="flex items-center gap-2">
                 <span class="text-gray-300 text-sm">🔊</span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-20 h-1 accent-violet-500"
                  />
                </div>
                

                {/* CLOSE */}
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-white text-2xl transition"
                >
                  ×
                </button>
              </div>
                <div className="mt-4 pt-3 border-t border-white/10">
    <p className="text-center text-xs text-gray-500 tracking-wide">
      Music player — Click play to start
    </p>
  </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* COLLAPSED ICON */}
        {!open && (
          <motion.button
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="
              w-16 h-16 rounded-full
              bg-violet-500 text-white
              shadow-[0_0_35px_rgba(139,92,246,0.7)]
              flex items-center justify-center
              text-xl
            "
          >
            🎧
          </motion.button>
        )}
      </div>
    </>
  );
}