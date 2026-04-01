import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashCursor from './components/SplashCursor';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <SplashCursor />
        <Hero />
        <Skills />
        <Projects />
        <Certificates />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
