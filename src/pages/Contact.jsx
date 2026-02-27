import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        setSuccess(true);
        form.reset();
      })
      .catch(() => alert("Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32 bg-[#0b0b12]"
    >
      {/* ===================== */}
      {/* NETLIFY HIDDEN FORM */}
      {/* ===================== */}
      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
      </form>

      {/* BACKGROUND ORBS */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 80, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-semibold text-white mb-6">
              Get in Touch
            </h3>

            <p className="text-gray-400 mb-10 leading-relaxed">
              Have a project in mind or just want to say hi?
              Drop a message — I’ll get back to you soon.
            </p>
          </motion.div>

          {/* RIGHT CARD */}
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form
                key="form"
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="
                  bg-white/5 backdrop-blur-2xl
                  border border-white/10
                  rounded-3xl p-10 space-y-6
                  shadow-[0_0_60px_rgba(139,92,246,0.15)]
                "
              >
                <input type="hidden" name="form-name" value="contact" />

                <input
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white"
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white"
                />

                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white"
                />

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                  className="
                    w-full py-4 rounded-xl font-semibold text-white
                    bg-gradient-to-r from-violet-500 to-indigo-500
                    shadow-[0_0_30px_rgba(139,92,246,0.6)]
                  "
                >
                  Send Message 🚀
                </motion.button>
              </motion.form>
            ) : (
              /* SUCCESS STATE */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="
                  bg-white/5 backdrop-blur-2xl
                  border border-white/10
                  rounded-3xl p-12 text-center
                  shadow-[0_0_60px_rgba(34,197,94,0.25)]
                "
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-6xl mb-6"
                >
                  ✅
                </motion.div>

                <h4 className="text-2xl font-semibold text-white mb-4">
                  Message Sent!
                </h4>

                <p className="text-gray-400">
                  Thanks for reaching out.  
                  I’ll get back to you very soon 🙂
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}