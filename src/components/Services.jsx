import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Building fast, scalable, and modern web applications using React and clean code practices.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI / UX Design",
    desc: "Designing intuitive interfaces with strong visual hierarchy and user-first thinking.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Ensuring seamless experiences across all devices with pixel-perfect responsiveness.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-script text-3xl text-green mb-2">
            What I Do
          </p>
          <h2 className="text-4xl font-bold">
            My <span className="text-yellow">Services</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/70 backdrop-blur rounded-xl p-8 border border-green/10
                         hover:-translate-y-3 hover:shadow-xl transition"
            >
              <div className="text-4xl text-green mb-5">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-dark/70 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}