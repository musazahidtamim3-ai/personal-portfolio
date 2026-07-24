import Navbar from "./components/shared/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Project from "./components/Project";
import Connect from "./components/Connect";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Education />
      <Project />
      <Connect />
      <Footer />
    </div>
  );
}
