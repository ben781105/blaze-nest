import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Lodging from "../components/Lodging";
import Marketplace from "../components/Marketplace";
import Mission from "../components/Mission";
import Navbar from "../components/Navbar";
import OurFeatures from "../components/OurFeatures";
import Simplify from "../components/Simplify";
import Testimonial from "../components/Testimonial";
import TheTeam from "../components/TheTeam";
import Vision from "../components/Vision";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurFeatures />
      <HowItWorks />
      <Lodging />
      <Marketplace />
      <Mission />
      <Vision />
      <AboutUs />
      <Testimonial />
      <TheTeam />
      <ContactUs />
      <Simplify />
      <Footer />
    </>
  );
}

export default HomePage;
