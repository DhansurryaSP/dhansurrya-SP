import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section
      id="about-preview"
      className="max-w-6xl mx-auto px-6 py-28"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-violet-400">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            I’m a passionate engineer focused on building intelligent,
            scalable, and user-friendly digital experiences.  
            My work blends <span className="text-gray-200">AI, modern web technologies,</span>  
            and clean design principles.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            From enterprise engineering training to real-world AI projects,
            I enjoy turning complex problems into simple, impactful solutions.
          </p>

          {/* CTA */}
          <a
            href="/about"
            className="inline-flex items-center gap-2
                       text-violet-400 font-medium
                       hover:text-violet-300 transition"
          >
            Read more about me
            <span className="text-lg">→</span>
          </a>
        </motion.div>

        {/* RIGHT — STATS / HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-white/5 backdrop-blur-xl
                          border border-white/10
                          rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-violet-400">2+</h3>
            <p className="text-sm text-gray-400 mt-2">
              Years Experience
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl
                          border border-white/10
                          rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-violet-400">10+</h3>
            <p className="text-sm text-gray-400 mt-2">
              Projects Built
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl
                          border border-white/10
                          rounded-2xl p-6 text-center col-span-2">
            <h3 className="text-xl font-semibold text-white">
              AI • Full-Stack • Research
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Core focus areas
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}