import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { GraphicDesigns } from '@/components/graphic-designs';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { MotionGraphics } from '@/components/motion-graphics';
import { Projects } from '@/components/projects';

export default function HomePage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Intro />
        <div className="site-shell">
          <Projects />
          <div className="about-experience">
            <About />
            <Experience />
          </div>
          <div className="creative-intro">
            <span className="eyebrow">Beyond the browser</span>
            <p>
              Same curiosity.
              <br />
              <span className="gradient-text">A different canvas.</span>
            </p>
          </div>
          <GraphicDesigns />
          <MotionGraphics />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
