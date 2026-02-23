import { motion } from "framer-motion";

const certifications = [
  {
    title: "Career Essentials in Generative AI",
    org: "Microsoft & LinkedIn (Issued Feb 2026)",
    year: "2026",
    type: "Professional Certificate",
    desc: "Hands-on training in GEN AI, transformers, prompt engineering, and AI product building.",
  },
  {
    title: "Introduction to Cloud Computing",
    org: "IBM",
    year: "2025",
    type: "Developer Certification",
    desc: "Supervised & unsupervised learning, model evaluation.",
  },
  {
    title: "Frontend Developer Course",
    org: "IBM",
    year: "2025",
    type: "Program Completion",
    desc: "React, Tailwind, Node.js, REST APIs, and deployment best practices.",
  },
    {
    title: "React JS",
    org: "Coursera",
    year: "2024",
    type: "Developer Course",
    desc: "Comprehensive React course covering fundamentals, hooks, state management, and project building.",
},
    {
    title: "Python, MySQL & WordPress",
    org: "LinkedIn Learning",
    year: "2022",
    type: "Developer Course",
    desc: "Comprehensive Python, MySQL, and WordPress course covering fundamentals, database management, and CMS development.",
},
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="max-w-6xl mx-auto px-6 py-28"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Certifications & <span className="text-violet-400">Learning</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Continuous learning through certifications, programs, and hands-on practice
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certifications.map((item, index) => (
<div
  className="
    bg-white/5 backdrop-blur-xl
    border border-white/10
    rounded-2xl p-6
    hover:border-violet-400/50
    hover:-translate-y-2
    transition
  "
>
  {/* Top Row */}
  <div className="flex justify-between items-center mb-4">
    <span className="text-sm text-violet-400 font-medium">
      {item.year}
    </span>
    <span className="text-xs text-gray-500">
      {item.org}
    </span>
  </div>

  <h3 className="text-lg font-semibold text-white mb-3">
    {item.title}
  </h3>

  <p className="text-gray-400 text-sm leading-relaxed mb-6">
    {item.desc}
  </p>

  {/* CERTIFICATION BUTTON */}
  <button
    className="
      inline-flex items-center gap-2
      px-4 py-2 text-xs font-medium
      rounded-full
      bg-violet-500/10 text-violet-400
      border border-violet-400/30
      hover:bg-violet-500/20
      hover:border-violet-400
      transition
    "
  >
    {item.type}
  </button>
</div>
        ))}
      </div>
    </section>
  );
}