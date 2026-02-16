import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import { Hero } from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";
import Footer from "./sections/Footer"
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <FeatureCards />
      {/* <Experience /> */}
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
}

export default App;