import { motion } from "framer-motion";

export default function ApplicationSupport() {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
  };

  return (
    <main className="bg-[#0b0b12] text-white">

      {/* ================= HERO ================= */}
      <section className="min-h-[70vh] flex items-center px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            {...fadeUp}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Application Support Engineer
          </motion.h1>

          <motion.p
            {...fadeUp}
            className="text-gray-400 max-w-3xl text-lg"
          >
            Ensuring application stability, rapid incident resolution, and
            seamless user experience across production environments.
          </motion.p>

          <motion.div {...fadeUp} className="mt-10 flex gap-4">
            <a
              href="#skills"
              className="px-6 py-3 rounded-xl bg-violet-500 hover:bg-violet-600 transition"
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
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl font-semibold mb-12">
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
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <p className="text-lg font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESPONSIBILITIES ================= */}
      <section className="py-24 px-6 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl font-semibold mb-10">
            Core Responsibilities
          </motion.h2>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
            {[
              "Monitor applications to ensure high availability",
              "Analyze production issues using logs and dashboards",
              "Perform root cause analysis and document incidents",
              "Provide L2 / L3 support for critical applications",
              "Coordinate with developers for bug fixes",
              "Handle incident, problem, and change management",
              "Support deployments and post-release validation",
              "Communicate with stakeholders and end users",
            ].map((item, i) => (
              <motion.li {...fadeUp} key={i} className="flex gap-3">
                <span className="text-violet-400">✔</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= TOOLS ================= */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl font-semibold mb-12">
            Tools & Technologies
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8 text-gray-300">
            <div>
              <h4 className="font-semibold mb-3 text-white">Applications</h4>
              <p>HTML, CSS, JavaScript</p>
              <p>React.js</p>
              <p>WordPress</p>
              <p>REST APIs</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-white">Debugging</h4>
              <p>Browser DevTools</p>
              <p>Log Analysis</p>
              <p>Error Tracking</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-white">Databases</h4>
              <p>MySQL</p>
              <p>Basic Query Analysis</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-white">Workflow</h4>
              <p>Git & GitHub</p>
              <p>Release Support</p>
              <p>Linux (Basics)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INCIDENT FLOW ================= */}
      <section className="py-24 px-6 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl font-semibold mb-12">
            How I Handle Production Issues
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "Issue Reported",
              "Impact Analysis",
              "Log Investigation",
              "Resolution & RCA",
            ].map((step, i) => (
              <motion.div
                {...fadeUp}
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <p className="font-medium">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl font-semibold mb-12">
            Relevant Experience
          </motion.h2>

          <div className="space-y-8 text-gray-300">
            <motion.div {...fadeUp}>
              <h4 className="text-xl font-semibold text-white">
                HTML Kitchen (2022 – 2024)
              </h4>
              <p>
                Supported live client applications, debugged production issues,
                collaborated with teams, and ensured application stability.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <h4 className="text-xl font-semibold text-white">
                Havas – Prose on Pixels (2024 – 2025)
              </h4>
              <p>
                Contributed to enterprise application support, defect resolution,
                and production monitoring.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-black/40">
        <motion.h2 {...fadeUp} className="text-3xl font-semibold mb-6">
          Let’s Keep Your Applications Running Smoothly
        </motion.h2>

        <motion.p {...fadeUp} className="text-gray-400 mb-8">
          Looking for a support engineer with a development mindset?
          Let’s connect.
        </motion.p>

        <motion.div {...fadeUp} className="flex justify-center gap-4">
          <a
            href="/contact"
            className="px-8 py-3 rounded-xl bg-violet-500 hover:bg-violet-600 transition"
          >
            Contact Me
          </a>
          <a
            target="blank" href="/resume/Dhansurrya_SP_Resume.pdf"
            className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </section>

    </main>
  );
}