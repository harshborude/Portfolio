import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import { Hero } from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";  // ✅ import Toaster

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
      
      {/* ✅ Toaster should be here so all pages can show toasts */}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
