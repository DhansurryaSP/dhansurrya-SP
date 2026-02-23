import { motion } from "framer-motion";
import ScrollArrows from "../components/ScrollArrows";


export default function About() {
  const drives = [
    {
      icon: "💡",
      title: "Innovation",
      desc:
        "Constantly exploring new technologies and methodologies to push the boundaries of what's possible with AI.",
    },
    {
      icon: "🎯",
      title: "Impact",
      desc:
        "Focused on creating solutions that make a real difference in people's lives and business operations.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      desc:
        "Believing in the power of teamwork and knowledge sharing to achieve extraordinary results.",
    },
  ];

  return (
    <main className="pt-28 bg-[#0b0b12] text-gray-300">


<ScrollArrows
  sections={[
    "about-banner",
    "stats",
    "expertise",
    "journey",
    "drives",
    "cta",
  ]}
/>
      {/* ===================== */}
      {/* ABOUT BANNER */}
      {/* ===================== */}
      <section id="about-banner" className="max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          About <span className="text-violet-400">Me</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-gray-400 text-lg"
        >
          I build scalable, human-centric AI and web solutions with strong
          foundations in engineering, design, and problem-solving.
        </motion.p>
      </section>

      {/* ===================== */}
      {/* STATS */}
      {/* ===================== */}
      <section id="stats" className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Projects Completed", value: "20+" },
          { label: "Years of Learning", value: "2+" },
          { label: "Technologies", value: "15+" },
          { label: "Certifications", value: "6+" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-violet-400/40 transition"
          >
            <h3 className="text-4xl font-bold text-violet-400 mb-2">
              {item.value}
            </h3>
            <p className="text-sm text-gray-400">{item.label}</p>
          </motion.div>
        ))}
      </section>

      {/* ===================== */}
      {/* CORE EXPERTISE */}
      {/* ===================== */}
      <section id="expertise" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Core <span className="text-violet-400">Expertise</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Frontend Engineering & UI Systems",
            "AI & Machine Learning Fundamentals",
            "Generative AI & NLP Applications",
            "Scalable System Design",
          ].map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-violet-400/40 transition"
            >
              <p className="text-lg text-white">{skill}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== */}
      {/* MY JOURNEY */}
      {/* ===================== */}
      <section id="journey" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          My <span className="text-violet-400">Journey</span>
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl text-gray-400 leading-relaxed"
        >
          My journey started with curiosity about how systems work and evolved
          into building intelligent applications. Through continuous learning,
          real-world projects, and industry exposure, I focus on creating
          meaningful, scalable solutions.
        </motion.p>
      </section>

      {/* ===================== */}
      {/* WHAT DRIVES ME */}
      {/* ===================== */}
      <section id="drives" className="py-32">
        <div className="text-center mb-20 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-violet-400 mb-4"
          >
            What Drives Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto text-lg"
          >
            The principles that guide my work and passion for technology
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          {drives.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-violet-500/20 flex items-center justify-center text-3xl text-violet-400 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== */}
      {/* LET'S WORK TOGETHER */}
      {/* ===================== */}
      <section id="cta" className="max-w-6xl mx-auto px-6 py-28 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-6"
        >
          Let’s <span className="text-violet-400">Work Together</span>
        </motion.h2>

        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Interested in collaborating or building something impactful?
          Let’s connect and make it happen.
        </p>

        <a
          href="/contact"
          className="inline-block bg-violet-500 text-white px-8 py-4 rounded-xl hover:bg-violet-600 transition"
        >
          Contact Me
        </a>
      </section>

      {/* ===================== */}
      {/* FOOTER */}
      {/* ===================== */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dhansurrya SP · All Rights Reserved
      </footer>
    </main>
  );
}