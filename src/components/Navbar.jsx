import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const menu = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50
                 bg-black/30 backdrop-blur-xl
                 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-white">
          Dhansurrya SP<span className="text-violet-400">.</span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-sm font-medium text-gray-300 ml-auto pr-8">
          {menu.map((item) => (
            <li key={item.name} className="relative group">
              <Link to={item.to} className="hover:text-white transition">
                {item.name}
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5
                               bg-violet-400 transition-all
                               group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* CTA + MOBILE ICON */}
        <div className="flex items-center gap-4">
<a
  href="/resume/Dhansurrya_SP_Resume.pdf"
  download
  className="hidden md:block bg-violet-500 text-white
             px-5 py-2 rounded-md text-sm
             hover:bg-violet-600 transition"
>
  Download CV
</a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-black/70 backdrop-blur-xl
                       border-t border-white/10"
          >
            <ul className="flex flex-col px-6 py-6 gap-6 text-gray-300">
              {menu.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block text-lg hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

<a
  href="/resume/Dhansurrya_SP_Resume.pdf"
  download
  className="mt-4 bg-violet-500 text-white
             px-5 py-3 rounded-md
             hover:bg-violet-600 transition"
>
  Download CV
</a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}