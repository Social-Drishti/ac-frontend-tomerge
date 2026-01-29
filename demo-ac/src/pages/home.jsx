import Navbar from "../components/layout/Navbar";
import SubNavbar from "../components/layout/SubNavbar";
import Footer from "../components/layout/Footer";

import Hero from "../sections/Hero";
import Services from "../sections/Services";
import WhyAstrology from "../sections/WhyAstrology";
import Clarity from "../sections/Clarity";
import Guidance from "../sections/Guidance";
import Testimonial from "../sections/Testimonial";
import Impact from "../sections/Impact";
import Newsletter from "../sections/Newsletter";
import CTA from "../sections/CTA";
import FAQ from "../sections/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <SubNavbar />

      <main>
        <Hero />
        <Services />
        <WhyAstrology />
        <Clarity />
        <Guidance />
        <Testimonial />
        <Impact />
        <Newsletter />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
