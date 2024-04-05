import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Projects from "./components/Projects";

function App() {
  return (
    <div
      className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden w-full bg-theme-1 text-theme-6
    flex flex-col justify-center items-center "
    >
      <Header />
      <Hero />

      <About />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
