import Navbar from "./components/navbar";
import Footer from "./components/footer";
import About from "./pages/about";
import SkillSection from "./pages/skills";
import Projects from "./pages/Projects";
import Contact from "./pages/contact";

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
