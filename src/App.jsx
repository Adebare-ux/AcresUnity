import { useState, useEffect, useRef } from "react";

// Global styles
import "./styles/globals.css";

// Section components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Locations from "./components/Locations";
import Properties from "./components/Properties";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef(null);

  /* ── Scroll → nav background ─── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Intersection observer → fade-in ─── */
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    document
      .querySelectorAll(".fade-in")
      .forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />
      <Hero />
      <Marquee />
      <About />
      <Locations />
      <Properties />
      <WhyUs />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
