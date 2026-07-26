import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Blog from './sections/Blog';
import Books from './sections/Books';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-warm-bg">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Blog />
        <Books />
      </main>
      <Footer />
    </div>
  );
}

export default App;
