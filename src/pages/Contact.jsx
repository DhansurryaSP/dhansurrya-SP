import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success
  const audioRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Play engine sound
    audioRef.current.currentTime = 0;
    audioRef.current.play();

    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch("/", { method: "POST", body: data });

      setTimeout(() => {
        audioRef.current.pause();
        setStatus("success");
        form.reset();
      }, 2600);
    } catch {
      audioRef.current.pause();
      setStatus("idle");
      alert("Something went wrong 😢");
    }
  };

  return (
    <section className="relative overflow-hidden py-32 bg-[#0b0b12]">
      {/* ENGINE AUDIO */}
      <audio ref={audioRef} src="/f1-engine.mp3" preload="auto" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <h3 className="text-3xl font-semibold text-white mb-6">Get in Touch</h3>
          <p className="text-gray-400">
            Have a project in mind or just want to say hi?
            Drop a message — I’ll get back to you very soon 🙂
          </p>
        </div>

        {/* RIGHT */}
        <AnimatePresence mode="wait">

          {/* ================= FORM ================= */}
          {status === "idle" && (
            <motion.form
              key="form"
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />

              <input name="name" required placeholder="Your Name" className="input" />
              <input name="email" required type="email" placeholder="Your Email" className="input" />
              <textarea name="message" required rows="4" placeholder="Your Message" className="input" />

              <button className="btn">Send Message 🚀</button>
            </motion.form>
          )}

          {/* ================= F1 LOADER ================= */}
          {status === "sending" && (
            <motion.div
              key="sending"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative bg-black/60 border border-white/10 rounded-3xl h-[360px] overflow-hidden flex items-center justify-center"
            >
              {/* SPEED LINES */}
              {[...Array(8)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute top-0 w-1 h-full bg-white/10"
                  initial={{ x: -200 }}
                  animate={{ x: 600 }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: "linear",
                  }}
                />
              ))}

              {/* CAR */}
              <motion.div
                animate={{ x: [-120, 120] }}
                transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
                className="text-6xl z-10"
              >
                🏎️
              </motion.div>

              <p className="absolute bottom-8 text-gray-300 tracking-widest">
                SENDING MESSAGE...
              </p>
            </motion.div>
          )}

          {/* ================= SUCCESS ================= */}
          {status === "success" && (
            <motion.div
              key="success"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative bg-black/60 border border-white/10 rounded-3xl p-12 text-center overflow-hidden"
            >
              {/* CONFETTI */}
              {[...Array(25)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute w-2 h-2 bg-green-400 rounded-full"
                  initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{
                    x: Math.random() * 300 - 150,
                    y: Math.random() * -200 - 50,
                    opacity: 0,
                  }}
                  transition={{ duration: 1.4 }}
                />
              ))}

              <div className="text-6xl mb-6">✅</div>
              <h4 className="text-2xl text-white font-semibold mb-2">
                Message Sent!
              </h4>
              <p className="text-gray-400">
                Thanks for reaching out.<br />
                I’ll get back to you very soon 🙂
              </p>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* TAILWIND SHORTCUTS */}
      <style>{`
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
        }
        .btn {
          width: 100%;
          padding: 16px;
          border-radius: 14px;
          font-weight: 600;
          color: white;
          background: linear-gradient(to right, #8b5cf6, #6366f1);
        }
      `}</style>
    </section>
  );
}