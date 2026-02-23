import { motion } from "framer-motion";

/* ================= ANIMATION ================= */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: "easeOut",
    },
  }),
};

/* ================= DATA ================= */
const journeyData = [
  {
    role: "Frontend Developer",
    company: "Havas - Prose on Pixels • Chennai",
    period: "07/2024 – 10/2025",
    points: [
      "Worked on enterprise-level brand and product websites for global clients.",
      "Developed scalable frontend components using React.",
      "Worked closely with designers, project managers, and backend teams.",
      "Maintained clean code standards and optimized performance.", 
      "Delivered high-quality UI under strict timelines.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "HTML Kitchen pvt ltd • Coimbatore, India",
    period: "10/2022 – 06/2024",
    points: [
        "Started my professional career as a frontend developer in a fast-paced startup where I worked on multiple real-world projects.",
        "Developed responsive websites using HTML, CSS, JavaScript, and React",
        "Built custom WordPress themes from scratch without page builders",
        "Converted Figma designs into pixel-perfect interfaces",
        "Focused on performance optimization and cross-browser compatibility",
    ],
  },
    {
    role: "Frontend Developer & WordPress Developer",
    company: "Freelance Work • Remote",
    points: [
   "Alongside full-time roles", 
   "I’ve taken on freelance projects for various clients, delivering custom websites, CMS solutions, and frontend enhancements tailored to business needs.",  
    "I’ve worked as a freelancer for multiple companies and products, delivering custom websites, CMS solutions, and frontend enhancements tailored to business needs.",        
    "Developed responsive websites using HTML, CSS, JavaScript, React.JS and WordPress",
    ],
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative max-w-6xl mx-auto px-6 py-28"
    >
      {/* ================= HEADING ================= */}
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-violet-400 mb-4">
          Professional Journey
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Building innovative AI solutions across diverse industries and research domains
        </p>
      </div>

      {/* ================= TIMELINE LINE (DESKTOP ONLY) ================= */}
      <div className="hidden md:block absolute left-8 top-[330px] bottom-0 w-[2px]
                      bg-gradient-to-b from-violet-500/80 to-transparent" />

      {/* ================= CARDS ================= */}
      <div className="space-y-20">
        {journeyData.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative md:pl-20"
          >
            {/* ================= DOT (DESKTOP ONLY) ================= */}
            <span
              className="hidden md:block absolute left-0.5 top-6
                         w-4 h-4 rounded-full
                         bg-violet-400
                         shadow-[0_0_20px_rgba(139,92,246,0.9)]"
            />

            {/* ================= CARD ================= */}
            <div
              className="bg-white/5 backdrop-blur-xl
                         border border-white/10
                         rounded-2xl p-6 md:p-8
                         shadow-xl
                         hover:border-violet-400/40
                         transition"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">
                  {item.role}
                </h3>
                <span className="text-sm text-gray-400">
                  {item.period}
                </span>
              </div>

              <p className="text-violet-400 mb-4">
                {item.company}
              </p>

              {/* Points */}
              <ul className="space-y-3">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <span className="text-violet-400">➜</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}