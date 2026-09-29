import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import ProjectsStrip from '@/components/ProjectsStrip';
import Projects from '@/components/Projects';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import QualitySafety from '@/components/QualitySafety';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bone text-ink selection:bg-bronze selection:text-white">
      <Navbar />
      <main>
        {/* Hero Section with Integrated 4-Metric Bar (Screenshot 1) */}
        <Hero />

        {/* About Section with Site Engineers Photo & Established Card (Screenshot 2 & 3) */}
        <About />

        {/* What We Do / Services Section on Dark Theme (Screenshot 3 bottom) */}
        <Services />

        {/* Projects Preview Strip */}
        <ProjectsStrip />

        {/* Complete Portfolio with Category Filters and Interactive Modal */}
        <Projects />

        {/* Engineering Value Proposition */}
        <WhyUs />

        {/* 5-Stage Construction Methodology */}
        <Process />

        {/* Quality, Standards & Certified Site Safety with Rebar Inspection Photo */}
        <QualitySafety />

        {/* Verified Client Testimonials */}
        <Testimonials />

        {/* Comprehensive Project Consultation & RFP Brief */}
        <Contact />

        {/* Final Call to Action with Addis Ababa Skyline */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
