import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Lodging from "../components/Lodging";
import Marketplace from "../components/Marketplace";
import Navbar from "../components/Navbar";
import OurFeatures from "../components/OurFeatures";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurFeatures />
      <HowItWorks />
      <Lodging />
      <Marketplace />
    </>
  );
}

export default HomePage;
