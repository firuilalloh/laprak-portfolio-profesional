import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import SkillSection from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <SkillSection />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
