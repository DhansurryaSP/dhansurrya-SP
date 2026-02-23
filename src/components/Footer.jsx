import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 py-10
                   flex flex-col md:flex-row
                   items-center justify-between gap-6"
      >
        {/* COPYRIGHT */}
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Dhansurrya S P. All rights reserved.
        </p>

        {/* SOCIAL LINKS */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-violet-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-violet-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </footer>
  );
}