import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      await fetch("/", {
        method: "POST",
        body: formData,
      });

      setTimeout(() => {
        setStatus("success");
        e.target.reset();
      }, 2200);
    } catch {
      setStatus("idle");
      alert("Failed to send message");
    }
  };

  return (
    <section className="relative py-32 bg-[#0b0b12] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h3 className="text-3xl font-semibold text-white mb-6">
            Get in Touch
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Have a project in mind or just want to say hi?
            Drop a message — I’ll get back to you very soon 🙂
          </p>
        </div>

        {/* RIGHT */}
        <AnimatePresence mode="wait">

          {/* ================= FORM ================= */}
          {status !== "success" && (
            <motion.form
              key="form"
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 space-y-6 overflow-hidden"
            >
              <input type="hidden" name="form-name" value="contact" />

              <input name="name" required placeholder="Your Name" className="input" />
              <input name="email" required type="email" placeholder="Your Email" className="input" />
              <textarea name="message" required rows="4" placeholder="Your Message" className="input" />

              {/* BUTTON */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                className="relative w-full py-4 rounded-xl font-semibold text-white
                           bg-gradient-to-r from-violet-500 to-indigo-500
                           overflow-hidden"
              >
                {/* TEXT */}
                <span className={status === "sending" ? "opacity-0" : ""}>
                  Send Message
                </span>

                {/* ROCKET */}
                <AnimatePresence>
                  {status === "idle" && (
                    <motion.span
                      className="absolute right-6 top-1/2 -translate-y-1/2 text-xl"
                      initial={{ x: 0 }}
                      animate={{ x: [0, 6, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                    >
                      🚀
                    </motion.span>
                  )}

                  {status === "sending" && (
                    <motion.span
                      className="absolute left-1/2 bottom-4 text-3xl"
                      initial={{ y: 0, opacity: 1 }}
                      animate={{ y: -260, opacity: 1 }}
                      transition={{ duration: 2, ease: "easeIn" }}
                    >
                      🚀
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* SMOKE */}
                {status === "sending" &&
                  [...Array(8)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="absolute left-1/2 bottom-3 w-2 h-2 bg-gray-300/50 rounded-full"
                      initial={{ y: 0, opacity: 1, scale: 0.6 }}
                      animate={{
                        y: 30 + i * 6,
                        opacity: 0,
                        scale: 1.4,
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
              </motion.button>
            </motion.form>
          )}

          {/* ================= SUCCESS ================= */}
          {status === "success" && (
            <motion.div
              key="success"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative bg-black/60 border border-white/10 rounded-3xl p-12 text-center overflow-hidden"
            >
              {/* CONFETTI */}
              {[...Array(20)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute w-2 h-2 bg-violet-400 rounded-full"
                  initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{
                    x: Math.random() * 260 - 130,
                    y: Math.random() * -200,
                    opacity: 0,
                  }}
                  transition={{ duration: 1.6 }}
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

      {/* LOCAL STYLES */}
      <style>{`
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
        }
      `}</style>
    </section>
  );
}