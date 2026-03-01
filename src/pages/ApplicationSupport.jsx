import { motion } from "framer-motion";
import ScrollArrows from "../components/ScrollArrows";

export default function ApplicationSupport() {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <>
      <main className="bg-[#0b0b12] text-white overflow-hidden">

        {/* ================= HERO ================= */}
        <section
          id="application-hero"
          className="relative min-h-[80vh] flex items-center px-6"
        >
          {/* Glow */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[150px]" />

          <div className="relative max-w-6xl mx-auto">
            <motion.h1 {...fadeUp} className="text-4xl md:text-6xl font-bold mb-6">
              Application Support Engineer
            </motion.h1>

            <motion.p
              {...fadeUp}
              className="text-gray-300 max-w-3xl text-lg leading-relaxed"
            >
              I ensure production applications remain stable, reliable, and
              performant by resolving incidents quickly, analyzing root causes,
              and collaborating across teams.
            </motion.p>

            <motion.div {...fadeUp} className="mt-10 flex gap-4 flex-wrap">
              <a
                href="#skills"
                className="px-6 py-3 rounded-xl bg-violet-500 hover:bg-violet-600 transition shadow-lg"
              >
                View Skills
              </a>
              <a
                href="/contact"
                className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </section>

        {/* ================= WHAT I DO ================= */}
        <section id="what-i-do" className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 {...fadeUp} className="text-3xl font-semibold mb-14">
              What I Do
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Incident & Production Support",
                "Root Cause Analysis (RCA)",
                "Monitoring & Issue Resolution",
                "L2 / L3 Application Support",
                "Cross-team Coordination",
                "SLA & Ticket Management",
              ].map((item, i) => (
                <motion.div
                  {...fadeUp}
                  key={i}
                  className="
                    group bg-white/5 border border-white/10
                    rounded-2xl p-8
                    hover:bg-white/10 transition
                    shadow-[0_0_40px_rgba(139,92,246,0.08)]
                  "
                >
                  <p className="text-lg font-medium group-hover:text-violet-400 transition">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= RESPONSIBILITIES ================= */}
        <section
          id="responsibilities"
          className="py-28 px-6 bg-gradient-to-b from-black/40 to-black/10"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 {...fadeUp} className="text-3xl font-semibold mb-12">
              Core Responsibilities
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Monitor applications for high availability",
                "Analyze production issues using logs & dashboards",
                "Perform root cause analysis and documentation",
                "Provide L2 / L3 support for critical systems",
                "Coordinate with developers for fixes",
                "Manage incidents, problems, and changes",
                "Support deployments & post-release checks",
                "Communicate clearly with stakeholders",
              ].map((item, i) => (
                <motion.div
                  {...fadeUp}
                  key={i}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10"
                >
                  <span className="text-violet-400 text-xl">✔</span>
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TOOLS ================= */}
        <section id="skills" className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 {...fadeUp} className="text-3xl font-semibold mb-14">
              Tools & Technologies
            </motion.h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Applications",
                  items: ["HTML, CSS, JavaScript", "React.js", "WordPress", "REST APIs"],
                },
                {
                  title: "Debugging",
                  items: ["Browser DevTools", "Log Analysis", "Error Tracking"],
                },
                {
                  title: "Databases",
                  items: ["MySQL", "Basic Query Analysis"],
                },
                {
                  title: "Workflow",
                  items: ["Git & GitHub", "Release Support", "Linux (Basics)"],
                },
              ].map((group, i) => (
                <motion.div
                  {...fadeUp}
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <h4 className="font-semibold text-white mb-4">
                    {group.title}
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    {group.items.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= INCIDENT FLOW ================= */}
        <section
          id="incident-flow"
          className="py-28 px-6 bg-black/40"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 {...fadeUp} className="text-3xl font-semibold mb-14">
              How I Handle Production Issues
            </motion.h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                "Issue Reported",
                "Impact Analysis",
                "Log Investigation",
                "Resolution & RCA",
              ].map((step, i) => (
                <motion.div
                  {...fadeUp}
                  key={i}
                  className="
                    relative bg-white/5 border border-white/10
                    rounded-2xl p-8 text-center
                    hover:border-violet-400 transition
                  "
                >
                  <span className="absolute -top-4 left-4 text-sm text-violet-400">
                    Step {i + 1}
                  </span>
                  <p className="font-medium">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section id="experience" className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 {...fadeUp} className="text-3xl font-semibold mb-14">
              Relevant Experience
            </motion.h2>

            <div className="space-y-10">
              {[
                {
                  role: "HTML Kitchen",
                  period: "2022 – 2024",
                  desc:
                    "Handled live production issues, collaborated with teams, and ensured application uptime for multiple clients.",
                },
                {
                  role: "Havas – Prose on Pixels",
                  period: "2024 – 2025",
                  desc:
                    "Worked on enterprise-level application support, monitoring, and defect resolution.",
                },
              ].map((job, i) => (
                <motion.div
                  {...fadeUp}
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8"
                >
                  <h4 className="text-xl font-semibold">
                    {job.role} <span className="text-gray-400">({job.period})</span>
                  </h4>
                  <p className="text-gray-300 mt-3 leading-relaxed">
                    {job.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section
          id="application-cta"
          className="py-28 px-6 text-center bg-gradient-to-t from-black/60 to-black/20"
        >
          <motion.h2 {...fadeUp} className="text-3xl font-semibold mb-6">
            Let’s Keep Your Applications Running Smoothly
          </motion.h2>

          <motion.p {...fadeUp} className="text-gray-400 mb-10 max-w-2xl mx-auto">
            If you’re looking for an Application Support Engineer with a
            development mindset, I’d love to connect.
          </motion.p>

          <motion.div {...fadeUp} className="flex justify-center gap-4 flex-wrap">
            <a
              href="/contact"
              className="px-8 py-3 rounded-xl bg-violet-500 hover:bg-violet-600 transition shadow-lg"
            >
              Contact Me
            </a>
            <a
              href="/resume/Dhansurrya_SP_Resume.pdf"
              target="_blank"
              className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
            >
              Download Resume
            </a>
          </motion.div>
        </section>
      </main>

      <ScrollArrows
        sections={[
          "application-hero",
          "what-i-do",
          "responsibilities",
          "skills",
          "incident-flow",
          "experience",
          "application-cta",
        ]}
      />
    </>
  );
}