import Navbar from "./components/shared/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Project from "./components/Project";
import Connect from "./components/Connect";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Certificates from "./components/Certificates";

export default function Home() {
  return (
    <div>

      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Education />
      <Project />
      <Certificates/>
      <Blog/>
      <Connect />
      <Footer />
    </div>
  );
}
