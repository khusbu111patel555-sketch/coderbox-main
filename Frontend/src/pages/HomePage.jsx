
import HeroSection from '../components/home/HeroSection';
import HowWeWorkSection from '../components/home/HowWeWorkSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import TeamSection from '../components/home/TeamSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BlogSection from '../components/home/BlogSection';
import ContactSection from '../components/home/ContactSection';
import FloatingChatButton from '../components/home/FloatingChatButton';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a1a] overflow-x-hidden">
      <HeroSection />
      <HowWeWorkSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <FloatingChatButton />
    </div>
  );
};

export default HomePage;