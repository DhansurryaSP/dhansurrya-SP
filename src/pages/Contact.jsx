import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32 bg-[#0b0b12]"
    >
      {/* ===================== */}
      {/* BACKGROUND ORBS */}
      {/* ===================== */}
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

        {/* ===================== */}
        {/* CONTENT */}
        {/* ===================== */}
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
              Whether you’re looking to build a product, need help with design
              or engineering, or just want to connect — I’m always open to
              meaningful conversations.
            </p>

            <div className="space-y-6 text-gray-300">
              <div className="flex items-center gap-4">
                <span className="text-2xl">📧</span>
                <span>dhansurrya@email.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">📍</span>
                <span>India</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
            className="
              relative
              bg-white/5 backdrop-blur-2xl
              border border-white/10
              rounded-3xl p-10 space-y-6
              shadow-[0_0_60px_rgba(139,92,246,0.15)]
            "
          >
            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full px-4 py-3 rounded-lg
                bg-black/40 border border-white/10
                text-white placeholder-gray-400
                focus:outline-none focus:border-violet-400
                transition
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full px-4 py-3 rounded-lg
                bg-black/40 border border-white/10
                text-white placeholder-gray-400
                focus:outline-none focus:border-violet-400
                transition
              "
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="
                w-full px-4 py-3 rounded-lg
                bg-black/40 border border-white/10
                text-white placeholder-gray-400
                focus:outline-none focus:border-violet-400
                transition
              "
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="
                w-full py-4 rounded-xl font-semibold text-white
                bg-gradient-to-r from-violet-500 to-indigo-500
                shadow-[0_0_30px_rgba(139,92,246,0.6)]
                hover:shadow-[0_0_50px_rgba(139,92,246,0.9)]
                transition
              "
            >
              Send Message 🚀
            </motion.button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}