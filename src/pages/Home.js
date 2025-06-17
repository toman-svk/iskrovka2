import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ContactForm from "../components/ContactForm";
import ServiceOffer from "../components/ServiceOffer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceOffer />
      <ContactForm />
    </>
  );
}