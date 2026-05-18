import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BloodDrips } from "./components/BloodDrips";
import { AudioControl } from "./components/AudioControl";
import { Loader } from "./components/Loader";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Loader />
      <BloodDrips />
      <AudioControl />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


