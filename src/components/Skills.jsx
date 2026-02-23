import { motion } from "framer-motion";

/* ================= ANIMATIONS ================= */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= DATA ================= */
const skills = [
  {
    title: "Frontend Development",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Bootstrap", "SCSS"],
  },
  {
    title: "CMS & Backend",
    items: ["WordPress (Custom Themes, ACF, Hooks & Filters)", "PHP", "MySQL"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git & GitHub", "Figma", "VS Code", "Netlify", "Vercel"],
  },
  {
    title: "Core Strengths",
    items: ["Pixel-perfect UI implementation", "Performance optimization", "Responsive & mobile-first design", "Clean, maintainable code"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-28"
    >
      {/* ================= HEADING ================= */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-violet-400 mb-4">
          Skills & Expertise
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Technologies and tools I use to build scalable, modern solutions
        </p>
      </div>

      {/* ================= GRID ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-white/5 backdrop-blur-xl
                       border border-white/10
                       rounded-2xl p-6
                       hover:border-violet-400/40
                       hover:-translate-y-2
                       transition"
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              {skill.title}
            </h3>

            <ul className="space-y-2">
              {skill.items.map((tech, i) => (
                <li
                  key={i}
                  className="text-gray-300 text-sm flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}