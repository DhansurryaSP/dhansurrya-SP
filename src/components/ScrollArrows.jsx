import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollArrows({ sections }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!Array.isArray(sections) || sections.length === 0) return;

    const handleScroll = () => {
      let closestIndex = 0;
      let minDistance = Infinity;

      sections.forEach((id, index) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setCurrent(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  if (!Array.isArray(sections) || sections.length === 0) return null;

  const scrollTo = (index) => {
    const el = document.getElementById(sections[index]);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {current > 0 && (
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollTo(current - 1)}
          className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 text-white text-xl"
        >
          ↑
        </motion.button>
      )}

      {current < sections.length - 1 && (
        <motion.button
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollTo(current + 1)}
          className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 text-white text-xl"
        >
          ↓
        </motion.button>
      )}
    </div>
  );
}