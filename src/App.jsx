import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ApplicationSupport from "./pages/ApplicationSupport";
import Footer from "./components/Footer";
import ScrollArrows from "./components/ScrollArrows";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  return (
    <>
      <MusicPlayer />
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/application-support"
            element={<ApplicationSupport />}
          />
        </Routes>

        <Footer />

      <ScrollArrows />
    </>
  );
}