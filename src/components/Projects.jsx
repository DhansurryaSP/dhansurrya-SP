import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "AI Resume Analyzer",
    description:
      "AI-powered system that evaluates resumes using NLP and provides actionable insights.",
    tech: ["React", "Python", "NLP"],
    link: "#",
  },
  {
    title: "Smart Chatbot",
    description:
      "Context-aware chatbot built using GPT models with real-time response optimization.",
    tech: ["React", "OpenAI", "Node"],
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Data-driven dashboard for tracking business metrics with interactive visualizations.",
    tech: ["React", "Chart.js", "API"],
    link: "#",
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-28">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Key <span className="text-violet-400">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mt-4">
          Selected projects showcasing real-world problem solving
        </p>
      </div>

      {/* PROJECT COLUMN */}
      <div className="space-y-6">
        {projects.map((project, index) => {
          const isOpen = active === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className="
                bg-white/5 backdrop-blur-xl
                border border-white/10
                rounded-2xl
                overflow-hidden
                hover:border-violet-400/40
                transition
              "
            >
              {/* HEADER */}
              <div className="p-6 flex items-center justify-between cursor-pointer">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                {/* Arrow */}
                <motion.span
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-violet-400 text-xl"
                >
                  →
                </motion.span>
              </div>

              {/* DROPDOWN */}
              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
                className="overflow-hidden px-6"
              >
                <div className="pb-6">
                  <p className="text-gray-400 text-sm mb-5">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full
                                   bg-violet-500/10 text-violet-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2
                               text-sm font-medium text-violet-400
                               hover:text-violet-300 transition"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}