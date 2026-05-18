import { Suspense, lazy } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BloodDrips } from "./components/BloodDrips";
import { AudioControl } from "./components/AudioControl";
import { Loader } from "./components/Loader";

// Lazy load non-critical components
const About = lazy(() => import("./components/About").then(m => ({ default: m.About })));
const Services = lazy(() => import("./components/Services").then(m => ({ default: m.Services })));
const Testimonials = lazy(() => import("./components/Testimonials").then(m => ({ default: m.Testimonials })));
const Gallery = lazy(() => import("./components/Gallery").then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Loader />
      <BloodDrips />
      <AudioControl />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-20" />}>
          <About />
          <Gallery />
          <Services />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}


