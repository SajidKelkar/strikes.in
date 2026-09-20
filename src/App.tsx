import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Courses from '@/components/Courses';
import WhyChoose from '@/components/WhyChoose';
import Tracks from '@/components/Tracks';
import Instructor from '@/components/Instructor';
import Testimonials from '@/components/Testimonials';
import Membership from '@/components/Membership';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import SaleExperience from '@/components/SaleExperience';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <Courses />
      <WhyChoose />
      <Tracks />
      <Instructor />
      <Testimonials />
      <Membership />
      <FAQ />
      <CTA />
      <Footer />
      <SaleExperience />
    </div>
  );
}
