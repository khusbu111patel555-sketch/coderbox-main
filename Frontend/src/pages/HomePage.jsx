import { lazy } from 'react';
import HeroSection from '../components/home/HeroSection';
import FloatingChatButton from '../components/home/FloatingChatButton';
import DeferredSection from '../components/DeferredSection';

const AboutSection = lazy(() => import('../components/home/AboutSection'));
const HowWeWorkSection = lazy(() => import('../components/home/HowWeWorkSection'));
const ServicesSection = lazy(() => import('../components/home/ServicesSection'));
const ProjectSection = lazy(() => import('../components/home/ProjectSection'));
const TeamSection = lazy(() => import('../components/home/TeamSection'));
const TestimonialsSection = lazy(() => import('../components/home/TestimonialsSection'));
const WhyChooseUsSection = lazy(() => import('../components/home/WhyChooseUsSection'));
const BlogSection = lazy(() => import('../components/home/BlogSection'));
const FaqSection = lazy(() => import('../components/home/FaqSection'));
const ContactSection = lazy(() => import('../components/home/ContactSection'));

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a1a] overflow-x-hidden">
      <HeroSection />
      <DeferredSection component={AboutSection} minHeight="42rem" />
      <DeferredSection component={HowWeWorkSection} minHeight="48rem" />
      <DeferredSection component={ServicesSection} minHeight="52rem" />
      <DeferredSection component={ProjectSection} minHeight="56rem" />
      <DeferredSection component={TeamSection} minHeight="48rem" />
      <DeferredSection component={TestimonialsSection} minHeight="46rem" />
      <DeferredSection component={WhyChooseUsSection} minHeight="48rem" />
      <DeferredSection component={BlogSection} minHeight="44rem" />
      <DeferredSection component={FaqSection} minHeight="42rem" />
      <DeferredSection component={ContactSection} minHeight="56rem" />
      <FloatingChatButton />
    </div>
  );
};

export default HomePage;


