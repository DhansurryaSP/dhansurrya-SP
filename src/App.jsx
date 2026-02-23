import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollArrows from "./components/ScrollArrows";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";


export default function App() {
  return (
    <>
    <MusicPlayer />
      <Navbar />

      <div className="pt-45 md:pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>

      <ScrollArrows />
    </>
  );
}