
// import HeroSection from '../components/home/HeroSection';
// import HowWeWorkSection from '../components/home/HowWeWorkSection';
// import AboutSection from '../components/home/AboutSection';
// import ServicesSection from '../components/home/ServicesSection';
// import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
// import TeamSection from '../components/home/TeamSection';
// import TestimonialsSection from '../components/home/TestimonialsSection';
// import BlogSection from '../components/home/BlogSection';
// import FaqSection from '../components/home/FaqSection';
// import ContactSection from '../components/home/ContactSection';
// import FloatingChatButton from '../components/home/FloatingChatButton';



import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import HowWeWorkSection from '../components/home/HowWeWorkSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import TeamSection from '../components/home/TeamSection';
import BlogSection from '../components/home/BlogSection';
import FaqSection from '../components/home/FaqSection';
import ContactSection from '../components/home/ContactSection';
import FloatingChatButton from '../components/home/FloatingChatButton';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a1a] overflow-x-hidden">
      <HeroSection />
        <AboutSection />
         <ServicesSection />
      <HowWeWorkSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <TeamSection />
      <BlogSection />
         <FaqSection />
      <ContactSection />
      <FloatingChatButton />
    </div>
  );
};

export default HomePage;


