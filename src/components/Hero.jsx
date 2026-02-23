import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
    const navigate = useNavigate();

  return (
<section
  id="hero"
  style={{ minHeight: "calc(100vh - 80px)" }}
  className="flex items-center"
>

     <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center -mt-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="font-script text-3xl text-green mb-2">
            Hy! I Am
          </p>
<h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
  <span className="text-violet-400">Dhansurrya</span>
</h1>

          <p className="mt-6 max-w-md text-gray-400">
Frontend & WordPress Developer with 3+ years of experience building responsive, high-performance web applications and CMS-driven platforms.      </p>

          {/* CTA BUTTONS */}
<div className="mt-10 flex gap-5">
  <button
    onClick={() =>
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    }
    className="bg-violet-500 text-white px-7 py-3 rounded-md
               hover:bg-violet-600 transition"
  >
    View My Work
  </button>

  {/* Get In Touch → navigate to Contact page */}
  <button
    onClick={() => navigate("/contact")}
    className="border border-violet-400 text-violet-400 px-7 py-3 rounded-md
               hover:bg-violet-500 hover:text-white transition"
  >
    Get In Touch
  </button>
</div>

          {/* EXPERIENCE */}
          <div className="mt-14 flex items-center gap-4">
            <span className="text-4xl font-bold text-green">3+</span>
            <p className="text-sm leading-tight">
              YEARS <br /> EXPERIENCE
            </p>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}

{/* RIGHT FLOATING CARDS */}
<div className="relative h-105 w-full">
  {/* Card 1 */}
  <motion.div
    variants={floatAnimation}
    initial="initial"
    animate="animate"
    className="
      absolute top-6 left-16
      bg-white/10 backdrop-blur-2xl
      border border-white/10
      rounded-xl px-6 py-4 w-56
      shadow-[0_15px_40px_rgba(0,0,0,0.5)]
      hover:-translate-y-2 transition
    "
  >
    <h4 className="text-violet-400 font-semibold mb-1">
      Machine Learning
    </h4>
    <p className="text-sm text-gray-300">
      Advanced AI models
    </p>
  </motion.div>

  {/* Card 2 */}
  <motion.div
    variants={floatAnimation}
    initial="initial"
    animate="animate"
    transition={{ delay: 0.8 }}
    className="
      absolute top-40 right-6
      bg-white/10 backdrop-blur-2xl
      border border-white/10
      rounded-xl px-6 py-4 w-56
      shadow-[0_15px_40px_rgba(0,0,0,0.5)]
      hover:-translate-y-2 transition
    "
  >
    <h4 className="text-cyan-400 font-semibold mb-1">
      Research
    </h4>
    <p className="text-sm text-gray-300">
      Innovation driven
    </p>
  </motion.div>

  {/* Card 3 */}
  <motion.div
    variants={floatAnimation}
    initial="initial"
    animate="animate"
    transition={{ delay: 1.6 }}
    className="
      absolute bottom-6 left-28
      bg-white/10 backdrop-blur-2xl
      border border-white/10
      rounded-xl px-6 py-4 w-56
      shadow-[0_15px_40px_rgba(0,0,0,0.5)]
      hover:-translate-y-2 transition
    "
  >
    <h4 className="text-indigo-400 font-semibold mb-1">
      Frontend Developing
    </h4>
    <p className="text-sm text-gray-300">
      Modern web apps
    </p>
  </motion.div>

</div>
      </div>
    </section>
  );
}