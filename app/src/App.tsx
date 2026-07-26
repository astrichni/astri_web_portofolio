import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import SkillsSection from './sections/SkillsSection';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Blog from './sections/Blog';
import Books from './sections/Books';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-warm-bg text-foreground font-space">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsSection />
        <Projects />
        <Experience />
        <Blog />
        <Books />
      </main>
      <Footer />
    </div>
  );
}

export default App;
